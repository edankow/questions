let liveSession = null;
const liveElement = id => document.getElementById(id);
const liveValueLimit = 500;
const liveReviewEndpoint = 'wss://questions-live-review.edankowicz.workers.dev';

function liveQueue() {
    const now = Date.now();
    return questions.filter(question =>
        (currentFilter === 'all' || currentFilter.includes(String(Number(question.chapter)))) &&
        isQuestionAvailable(profiles[currentProfile][question.id], now, false, false)
    ).map(question => question.id);
}

function setLiveStatus(message) {
    liveElement('livePairingStatus').textContent = message;
    liveElement('liveStatus').textContent = message;
}

function startLiveHost() {
    startLiveSession(true, Date.now().toString(36) + '-' + crypto.randomUUID());
}

function openLiveInvite() {
    if (!location.hash.startsWith('#live=')) return;
    const room = location.hash.slice(6);
    history.replaceState(history.state, '', location.pathname + location.search);
    if (/^[a-z0-9]+-[a-f0-9-]{36}$/.test(room)) startLiveSession(false, room);
}

function startLiveSession(host, room) {
    if (liveSession) return;
    liveElement('liveShareControls').hidden = true;
    liveElement('liveDialog').showModal();
    setLiveStatus(host ? 'Creating your private room…' : 'Joining Live Review…');
    const channel = new WebSocket(liveReviewEndpoint + '/live/' + room + '/' + (host ? 'host' : 'guest'));
    const session = {
        channel, host, ready: false, queue: new Set(liveQueue()),
        singleChapter: currentFilter.length === 1,
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
            document.querySelector('.profile-section').inert = true;
            document.querySelector('.btn-back').hidden = true;
            setLiveRatingEnabled(false);
            waitForLiveQuestion(host
                ? 'Connected. Finding questions due for both of you…'
                : 'Connected. Suggest scenario details to your host as they fill in the inputs. The question will appear when they’re done.');
            sendLive({ type: 'profile', name: currentProfile.trim().slice(0, 120) || 'Guest' });
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
    document.querySelector('.profile-section').inert = false;
    document.querySelector('.btn-back').hidden = false;
    setLiveRatingEnabled(true);
    if (session?.ready) loadNextQuestion();
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
    });
    liveElement('liveRatingWait').hidden = enabled;
}

function receiveLiveMessage(session, message) {
    if (message?.type === 'profile' && typeof message.name === 'string' &&
        message.name.trim() && message.name.length <= 120) {
        liveElement('livePartnerName').textContent = message.name;
        liveElement('livePartner').hidden = false;
    } else if (message?.type === 'queue' && session.host && !session.partnerQueue) {
        if (!Array.isArray(message.ids) || message.ids.length > questions.length ||
            !message.ids.every(id => typeof id === 'string')) return;
        session.partnerQueue = new Set(message.ids);
        nextLiveQuestion();
    } else if (message?.type === 'question' && !session.host && !session.finished) {
        const question = questions.find(item => item.id === message.id);
        if (!question || !session.queue.has(question.id) || (session.shown && !session.rated)) return;
        const placeholders = new Set(question.text.match(/\[[^\]]*\]/g));
        if (!Array.isArray(message.values) || message.values.length !== placeholders.size ||
            !message.values.every(value => typeof value === 'string' && value.length <= liveValueLimit)) return;
        session.queue.delete(question.id);
        activeQuestion = question;
        renderQuestionScenario(question, message.values);
        showLiveRating(session);
    } else if (message?.type === 'rated' && session.shown && message.id === activeQuestion?.id) {
        session.partnerRated = true;
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

function nextLiveQuestion() {
    const session = liveSession;
    const shared = questions.filter(question => session.queue.has(question.id) && session.partnerQueue.has(question.id));
    if (!shared.length) {
        waitForLiveQuestion('No more shared questions due.');
        sendLive({ type: 'done' });
        return;
    }
    const preferred = shared.find(question => question.id === session.preferred);
    activeQuestion = pickReviewQuestion(shared, session.questionOrder, session.singleChapter, preferred);
    session.queue.delete(activeQuestion.id);
    session.shown = false;
    session.rated = false;
    session.partnerRated = false;
    setLiveStatus('Prepare the shared scenario for your partner.');
    if (preferred && session.initialValues) {
        if (session.initialValues.every(value => value.length <= liveValueLimit)) {
            renderQuestionScenario(activeQuestion, session.initialValues);
            shareLiveScenario(session.initialValues);
        } else {
            setupCreativity(activeQuestion.text);
        }
    } else {
        setupCreativity(activeQuestion.text);
    }
    session.preferred = null;
    session.initialValues = null;
}

function shareLiveScenario(values) {
    const session = liveSession;
    if (!session?.ready || !session.host || session.shown) return;
    if (values.some(value => value.length > liveValueLimit)) {
        showPhase('setupPhase');
        setLiveStatus('Keep each scenario entry to 500 characters or fewer.');
        return;
    }
    showLiveRating(session);
    sendLive({ type: 'question', id: activeQuestion.id, values });
}

function showLiveRating(session) {
    session.shown = true;
    session.rated = false;
    if (!session.host) session.partnerRated = false;
    setLiveRatingEnabled(true);
    setLiveStatus('Choose your own rating when you are ready.');
}

function showLiveRatingWait(session) {
    liveElement('liveRatingWait').textContent = session.host
        ? 'Rating saved. Waiting for your partner…'
        : session.partnerRated
            ? 'Both ratings saved. Help your host prepare the next question by suggesting scenario details.'
            : 'Rating saved. Once your host has rated, help them prepare the next question by suggesting scenario details.';
}

function rateLiveQuestion() {
    const session = liveSession;
    session.rated = true;
    showLiveRatingWait(session);
    setLiveRatingEnabled(false);
    setLiveStatus('');
    sendLive({ type: 'rated', id: activeQuestion.id });
    if (session.host && session.partnerRated) nextLiveQuestion();
}
