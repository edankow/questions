let liveSession = null;
const liveElement = id => document.getElementById(id);
const liveValueLimit = 500;
const liveReviewEndpoint = 'wss://questions-live-review.edankowicz.workers.dev';

function liveQueue() {
    const now = Date.now();
    return questions.filter(question =>
        isQuestionAvailable(profiles[currentProfile][question.id], now, false, false)
    ).map(question => question.id);
}

function setLiveStatus(message) {
    liveElement('livePairingStatus').textContent = message;
    liveElement('liveStatus').textContent = message;
}

function startLiveHost() {
    if (liveSession) return;
    const options = liveElement('liveInviteOptions');
    options.reset();
    options.hidden = false;
    liveElement('liveShareControls').hidden = true;
    setLiveStatus('');
    liveElement('liveDialog').showModal();
}

function createLiveInvite(event) {
    event.preventDefault();
    const editor = new FormData(event.currentTarget).get('scenarioEditor');
    startLiveSession(true, Date.now().toString(36) + '-' + crypto.randomUUID(), editor);
}

function openLiveInvite() {
    if (!location.hash.startsWith('#live=')) return;
    const room = location.hash.slice(6);
    history.replaceState(history.state, '', location.pathname + location.search);
    if (/^[a-z0-9]+-[a-f0-9-]{36}$/.test(room)) startLiveSession(false, room);
}

function startLiveSession(host, room, editor) {
    if (liveSession) return;
    liveElement('liveShareControls').hidden = true;
    liveElement('liveInviteOptions').hidden = true;
    const dialog = liveElement('liveDialog');
    if (!dialog.open) dialog.showModal();
    setLiveStatus(host ? 'Creating your private room…' : 'Joining Live Review…');
    const channel = new WebSocket(liveReviewEndpoint + '/live/' + room + '/' + (host ? 'host' : 'guest'));
    const session = {
        channel, host, ready: false, queue: new Set(liveQueue()),
        editor, guestTurn: editor !== 'host',
        questionOrder: { count: 0, lastIndex: -1 },
        preferred: activeQuestion?.id,
        initialValues: !liveElement('reviewPhase').classList.contains('hidden')
            ? currentScenarioValues : null
    };
    liveSession = session;
    channel.addEventListener('message', event => {
        if (session !== liveSession || typeof event.data !== 'string' || event.data.length > 128000) return;
        let message;
        try {
            message = JSON.parse(event.data);
        } catch {
            return;
        }
        if (message?.type === 'inviting' && host && !session.ready) {
            const url = new URL(location.href);
            url.hash = 'live=' + room;
            liveElement('liveShare').value = url.href;
            liveElement('liveShareControls').hidden = false;
            setLiveStatus('Share this private link and keep this tab open.');
        } else if (message?.type === 'connected' && !session.ready) {
            session.ready = true;
            liveElement('liveDialog').close();
            liveElement('liveBanner').hidden = false;
            setLiveMenuState(session);
            document.querySelector('.btn-back').hidden = true;
            setLiveRatingEnabled(false);
            waitForLiveQuestion(host
                ? 'Connected. Finding questions due for both of you…'
                : 'Connected. Waiting for the first shared question. When the host fills in the inputs, you can help by suggesting scenario details.');
            sendLive({ type: 'profile', name: currentProfile.trim().slice(0, 120) || 'Guest', scenarioEdits: true, inputTurns: true });
            if (!host) sendLive({ type: 'queue', ids: [...session.queue] });
        } else if (session.ready) {
            receiveLiveMessage(session, message);
        }
    });
    channel.addEventListener('close', () => {
        if (session !== liveSession) return;
        const message = session.ready ? 'The Live Review session ended.'
            : 'Could not join Live Review. The room may be closed or the invite expired.';
        endLiveReview();
        liveElement('liveBanner').hidden = false;
        setLiveStatus(message);
    });
}

function endLiveReview() {
    const session = liveSession;
    liveSession = null;
    session?.channel.close();
    liveElement('liveDialog').close();
    liveElement('liveBanner').hidden = true;
    liveElement('livePartner').hidden = true;
    liveElement('livePartnerName').textContent = '';
    setLiveMenuState(null);
    const back = document.querySelector('.btn-back');
    back.hidden = false;
    back.textContent = '← Back to Inputs';
    liveElement('cancelLiveEdit').hidden = true;
    setLiveRatingEnabled(true);
    if (session?.ready) loadNextQuestion();
}

function setLiveMenuState(session) {
    liveElement('chapterFilter').inert = Boolean(session && !session.host);
    liveElement('liveProfileNotice').hidden = !session;
    document.querySelectorAll('[data-live-lock], .profile-switch-options button').forEach(button => {
        button.disabled = Boolean(session);
    });
    const profileSwitch = document.querySelector('.profile-switch-menu');
    profileSwitch.open = false;
    profileSwitch.inert = Boolean(session);
}

liveElement('liveDialog').addEventListener('cancel', event => {
    event.preventDefault();
    endLiveReview();
});

async function copyLiveInvite() {
    const field = liveElement('liveShare');
    field.select();
    try {
        await navigator.clipboard.writeText(field.value);
        setLiveStatus('Invite copied. Send it to your partner.');
    } catch {
        setLiveStatus('The link is selected. Copy it and send it to your partner.');
    }
}

function sendLive(message) {
    const channel = liveSession.channel;
    if (channel.readyState === WebSocket.OPEN) channel.send(JSON.stringify(message));
}


function waitForLiveQuestion(message) {
    ['setupPhase', 'reviewPhase', 'completionState'].forEach(id => liveElement(id).classList.add('hidden'));
    setLiveStatus(message);
}

function setLiveRatingEnabled(enabled) {
    document.querySelectorAll('#reviewPhase .tooltip-wrapper').forEach(wrapper => {
        wrapper.hidden = !enabled;
        wrapper.classList.toggle('hidden', !enabled);
        wrapper.querySelector('button').disabled = !enabled;
    });
    liveElement('liveRatingWait').hidden = enabled;
}

function receiveLiveMessage(session, message) {
    if (message?.type === 'profile' && typeof message.name === 'string' &&
        message.name.trim() && message.name.length <= 120) {
        liveElement('livePartnerName').textContent = message.name;
        liveElement('livePartner').hidden = false;
        session.scenarioEdits = message.scenarioEdits === true;
        session.inputTurns = message.inputTurns === true;
        updateLiveEditButton(session);
    } else if (message?.type === 'queue' && session.host && !session.partnerQueue) {
        if (!Array.isArray(message.ids) || message.ids.length > questions.length ||
            !message.ids.every(id => typeof id === 'string')) return;
        session.partnerQueue = new Set(message.ids);
        nextLiveQuestion();
    } else if (message?.type === 'draft' && !session.host && !session.finished &&
               (!session.shown || session.rated) && session.queue.has(message.id)) {
        const question = questions.find(item => item.id === message.id);
        if (!question || !scenarioInputCount(question)) return;
        session.shown = false;
        session.draftQuestion = question;
        activeQuestion = question;
        setLiveStatus('Your turn. Fill in the inputs and click Generate Question.');
        setupCreativity(question.text);
    } else if (message?.type === 'draft-values' && session.host && session.waitingForDraft &&
               message.id === session.pendingQuestion?.id && validLiveValues(session.pendingQuestion, message.values)) {
        session.waitingForDraft = false;
        shareLiveScenario(message.values);
    } else if (message?.type === 'question' && !session.host && !session.finished) {
        const question = questions.find(item => item.id === message.id);
        const revision = message.revision ?? 0;
        const revised = session.shown && message.id === activeQuestion?.id && revision === session.revision + 1;
        const fresh = revision === 0 && session.queue.has(message.id) && (!session.shown || session.rated);
        if (!question || (!fresh && !revised)) return;
        if (!validLiveValues(question, message.values)) return;
        session.draftQuestion = null;
        session.queue.delete(question.id);
        activeQuestion = question;
        session.revision = revision;
        renderQuestionScenario(question, message.values);
        showLiveRating(session);
        if (revised) setLiveStatus('The host updated the scenario. Please rate the revised question.');
    } else if (message?.type === 'rated' && session.shown && message.id === activeQuestion?.id &&
               (message.revision ?? 0) === session.revision) {
        session.partnerRated = true;
        if (session.editing) return;
        if (session.rated) {
            if (session.host) nextLiveQuestion();
            else showLiveRatingWait(session);
        } else {
            setLiveStatus('Your partner is waiting. Choose Answered Confidently or Needs Review when you’re ready.');
        }
    } else if (message?.type === 'done' && !session.host && (!session.shown || session.rated)) {
        session.finished = true;
        waitForLiveQuestion('No more shared questions due.');
    }
}

function scenarioInputCount(question) {
    return new Set(question.text.match(/\[[^\]]*\]/g)).size;
}

function validLiveValues(question, values) {
    return Array.isArray(values) && values.length === scenarioInputCount(question) &&
        values.every(value => typeof value === 'string' && value.length <= liveValueLimit);
}

function nextLiveQuestion() {
    const session = liveSession;
    const allShared = getLiveSharedQuestions();
    const shared = allShared.filter(question => currentFilter === 'all' || currentFilter.includes(String(Number(question.chapter))));
    session.pendingQuestion = null;
    session.shown = false;
    if (!shared.length) {
        initChapterFilters();
        if (allShared.length) {
            waitForLiveQuestion('No shared questions are due in these chapters. Choose another chapter to continue.');
            return;
        }
        session.finished = true;
        waitForLiveQuestion('No more shared questions due.');
        sendLive({ type: 'done' });
        return;
    }
    const preferred = shared.find(question => question.id === session.preferred);
    activeQuestion = pickReviewQuestion(shared, session.questionOrder, currentFilter.length === 1, preferred);
    session.queue.delete(activeQuestion.id);
    session.pendingQuestion = activeQuestion;
    session.revision = 0;
    session.rated = false;
    session.partnerRated = false;
    initChapterFilters();
    if (session.inputTurns && session.guestTurn && scenarioInputCount(activeQuestion)) {
        session.waitingForDraft = true;
        waitForLiveQuestion('Your partner is filling in the inputs. Suggest details to help them prepare the scenario.');
        sendLive({ type: 'draft', id: activeQuestion.id });
    } else if (preferred && session.initialValues) {
        if (session.initialValues.every(value => value.length <= liveValueLimit)) {
            shareLiveScenario(session.initialValues);
        } else {
            setLiveStatus('Your turn. Fill in the inputs to prepare the shared scenario.');
            setupCreativity(activeQuestion.text);
        }
    } else {
        setLiveStatus('Your turn. Fill in the inputs to prepare the shared scenario.');
        setupCreativity(activeQuestion.text);
    }
    session.preferred = null;
    session.initialValues = null;
}

function getLiveSharedQuestions() {
    const session = liveSession;
    if (!session?.partnerQueue) return null;
    return questions.filter(question => session.queue.has(question.id) && session.partnerQueue.has(question.id));
}

function updateLiveChapters() {
    const session = liveSession;
    if (!session.host || !session.partnerQueue || session.finished) return;
    session.questionOrder.count = 0;
    session.questionOrder.lastIndex = -1;
    if (session.shown || session.waitingForDraft) return;
    if (session.pendingQuestion) {
        const question = session.pendingQuestion;
        if (currentFilter === 'all' || currentFilter.includes(String(Number(question.chapter)))) {
            session.questionOrder.count = 1;
            session.questionOrder.lastIndex = questions.indexOf(question);
            return;
        }
        session.queue.add(question.id);
    }
    nextLiveQuestion();
}

function shareLiveScenario(values) {
    const session = liveSession;
    if (!session?.ready || (session.host ? session.waitingForDraft || (session.shown && !session.editing)
        : session.draftQuestion !== activeQuestion)) return;
    if (values.some(value => value.length > liveValueLimit)) {
        showPhase('setupPhase');
        setLiveStatus('Keep each scenario entry to 500 characters or fewer.');
        return;
    }
    if (!session.host) {
        session.draftQuestion = null;
        waitForLiveQuestion('Inputs sent. Opening the shared question…');
        sendLive({ type: 'draft-values', id: activeQuestion.id, values });
        return;
    }
    const revised = session.editing;
    if (revised && values.every((value, index) => value === currentScenarioValues[index])) {
        cancelLiveScenarioEdit();
        return;
    }
    if (revised) session.revision++;
    if (!revised && session.editor === 'turns' && values.length) session.guestTurn = !session.guestTurn;
    session.pendingQuestion = null;
    session.editing = false;
    liveElement('cancelLiveEdit').hidden = true;
    renderQuestionScenario(activeQuestion, values);
    showLiveRating(session);
    sendLive({ type: 'question', id: activeQuestion.id, values, revision: session.revision });
    if (revised) setLiveStatus('Revised scenario shared. Please rate the updated question.');
}

function updateLiveEditButton(session) {
    const button = document.querySelector('.btn-back');
    button.hidden = !(session.host && session.scenarioEdits && session.shown && currentScenarioValues.length);
    if (!button.hidden) button.textContent = 'Edit Inputs';
}

function editLiveScenario() {
    const session = liveSession;
    if (!session?.host || !session.scenarioEdits || !session.shown || !currentScenarioValues.length) return;
    session.editing = true;
    setupCreativity(activeQuestion.text);
    document.querySelectorAll('#inputContainer input').forEach((input, index) => {
        input.value = currentScenarioValues[index];
    });
    liveElement('cancelLiveEdit').hidden = false;
    setLiveStatus('Edit the inputs, then generate the question to share your changes.');
}

function cancelLiveScenarioEdit() {
    const session = liveSession;
    if (!session?.editing) return;
    session.editing = false;
    liveElement('cancelLiveEdit').hidden = true;
    if (session.rated && session.partnerRated) {
        nextLiveQuestion();
        return;
    }
    showPhase('reviewPhase');
    setLiveStatus(session.rated ? '' : session.partnerRated
        ? 'Your partner is waiting for you to rate.'
        : 'Choose your own rating when you are ready.');
}

function showLiveRating(session) {
    session.shown = true;
    session.rated = false;
    session.partnerRated = false;
    setLiveRatingEnabled(true);
    updateLiveEditButton(session);
    setLiveStatus('Choose your own rating when you are ready.');
}

function showLiveRatingWait(session) {
    liveElement('liveRatingWait').textContent = session.host
        ? 'Rating saved. Waiting for your partner…'
        : session.partnerRated
            ? 'Both ratings saved. Waiting for the next question. If it’s the host’s turn, you can help by suggesting scenario details.'
            : 'Rating saved. Waiting for your partner…';
}

function rateLiveQuestion() {
    const session = liveSession;
    session.rated = true;
    showLiveRatingWait(session);
    setLiveRatingEnabled(false);
    setLiveStatus('');
    sendLive({ type: 'rated', id: activeQuestion.id, revision: session.revision });
    if (session.host && session.partnerRated) nextLiveQuestion();
}
