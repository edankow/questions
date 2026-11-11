let liveSession = null;
let pendingLiveInvite = null;
const liveElement = id => document.getElementById(id);
const liveValueLimit = 500;
const liveReviewEndpoint = 'wss://questions-live-review.edankowicz.workers.dev';
const liveRoomLifetime = 2 * 60 * 60 * 1000;

function liveStorageKey(room, host) {
    return 'ksa_live_' + room + (host ? '_host' : '_guest');
}

function saveLiveSession() {
    const session = liveSession;
    if (!session || session.restoring) return;
    const snapshot = {
        ...session, channel: undefined, retryTimer: undefined,
        queue: [...session.queue], partnerQueue: session.partnerQueue ? [...session.partnerQueue] : null,
        pendingQuestion: session.pendingQuestion?.id, draftQuestion: session.draftQuestion?.id,
        activeQuestion: activeQuestion?.id, values: currentScenarioValues,
        inputs: Array.from(document.querySelectorAll('#inputContainer input'), input => input.value),
        phase: ['setupPhase', 'reviewPhase', 'completionState'].find(id => !liveElement(id).classList.contains('hidden')),
        profile: currentProfile, filter: currentFilter, memory: sessionMemory
    };
    try {
        sessionStorage.setItem(liveStorageKey(session.room, session.host), JSON.stringify(snapshot));
    } catch {
        // Continue the current review if this browser cannot save tab state.
    }
}

window.addEventListener('pagehide', saveLiveSession);
document.addEventListener('input', saveLiveSession);
document.addEventListener('change', saveLiveSession);

function liveQueue() {
    const now = Date.now();
    return questions.filter(question =>
        isQuestionAvailable(profiles[currentProfile][question.id], now, false, false)
    ).map(question => question.id);
}

function setLiveStatus(message) {
    if (liveSession) liveSession.status = message;
    liveElement('livePairingStatus').textContent = message;
    liveElement('liveStatus').textContent = message;
}

function startLiveHost() {
    if (liveSession) return;
    liveElement('liveTitle').textContent = 'Live Review';
    liveElement('liveBanner').hidden = true;
    liveElement('restartLiveReview').hidden = true;
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
    const params = new URLSearchParams(location.hash.slice(1));
    const room = params.get('live');
    const host = params.get('role') === 'host';
    if (!/^[a-z0-9]+-[a-f0-9-]{36}$/.test(room)) return;
    let saved;
    try {
        saved = JSON.parse(sessionStorage.getItem(liveStorageKey(room, host)));
    } catch { /* An invite can still be opened without saved tab state. */ }
    if (saved?.room !== room || saved.host !== host || !saved.token ||
        !profiles[saved.profile] || Date.now() - parseInt(room, 36) > liveRoomLifetime) saved = null;
    if (host && !Object.hasOwn(profiles, currentProfile)) return;
    if (host || saved) {
        startLiveSession(host, room, saved?.editor, saved);
        return true;
    }
    pendingLiveInvite = room;
    liveElement('liveTitle').textContent = 'Join Live Review';
    liveElement('liveUseProfile').textContent = `Join as ${currentProfile}`;
    liveElement('liveNewProfile').reset();
    liveElement('liveProfileError').hidden = true;
    liveElement('liveGuestProfile').hidden = false;
    setLiveStatus('');
    liveElement('liveDialog').showModal();
    const emptyDefaultGuest = currentProfile === 'Guest' && Object.hasOwn(profiles, 'Guest') &&
        Object.keys(profiles).length === 1 && Object.keys(profiles.Guest).length === 0;
    const canUseCurrentProfile = Object.hasOwn(profiles, currentProfile) && !emptyDefaultGuest;
    liveElement('liveProfileBack').hidden = !canUseCurrentProfile;
    showLiveGuestProfileForm(!canUseCurrentProfile);
    return true;
}

function showLiveGuestProfileForm(showForm) {
    liveElement('liveProfileChoices').hidden = showForm;
    liveElement('liveNewProfile').hidden = !showForm;
    liveElement(showForm ? 'liveProfileName' : 'liveUseProfile').focus();
}

function createLiveGuestProfile(event) {
    event.preventDefault();
    if (!pendingLiveInvite) return;
    const name = liveElement('liveProfileName').value.trim();
    if (!name || name in profiles) {
        const error = liveElement('liveProfileError');
        error.textContent = name ? 'That profile name is already in use. Choose another name.' : 'Enter a profile name.';
        error.hidden = false;
        liveElement('liveProfileName').focus();
        return;
    }
    profiles[name] = {};
    saveToStorage();
    currentProfile = name;
    localStorage.setItem('ksa_current_profile', name);
    updateProfileDropdown();
    initChapterFilters();
    joinLiveInvite();
}

function joinLiveInvite() {
    if (!pendingLiveInvite || !Object.hasOwn(profiles, currentProfile)) return;
    const room = pendingLiveInvite;
    pendingLiveInvite = null;
    startLiveSession(false, room);
}

function startLiveSession(host, room, editor, saved = null) {
    if (liveSession) return;
    liveElement('liveTitle').textContent = 'Live Review';
    liveElement('startLiveReview').hidden = true;
    liveElement('leaveLiveReview').hidden = false;
    liveElement('restartLiveReview').hidden = true;
    liveElement('liveShareControls').hidden = true;
    liveElement('liveInviteOptions').hidden = true;
    liveElement('liveGuestProfile').hidden = true;
    const dialog = liveElement('liveDialog');
    if (!dialog.open) dialog.showModal();
    setLiveStatus(host ? 'Creating your private room…' : 'Joining Live Review…');
    const session = {
        host, room, token: crypto.randomUUID(), ready: false, queue: new Set(liveQueue()),
        outbox: [], nextClientSeq: 0, lastReceived: 0, retries: 0,
        editor, guestTurn: editor === 'guest',
        ratings: {},
        questionOrder: { count: 0, lastIndex: -1 },
        preferred: activeQuestion?.id,
        initialValues: !liveElement('reviewPhase').classList.contains('hidden')
            ? currentScenarioValues : null
    };
    if (saved) {
        Object.assign(session, saved, {
            queue: new Set(saved.queue), partnerQueue: saved.partnerQueue ? new Set(saved.partnerQueue) : null,
            pendingQuestion: questions.find(question => question.id === saved.pendingQuestion),
            draftQuestion: questions.find(question => question.id === saved.draftQuestion), retries: 0
        });
        currentProfile = saved.profile;
        localStorage.setItem('ksa_current_profile', currentProfile);
        currentFilter = saved.filter;
        sessionMemory = saved.memory || {};
        activeQuestion = questions.find(question => question.id === saved.activeQuestion) || null;
        currentScenarioValues = saved.values || [];
        updateProfileDropdown();
        initChapterFilters();
    }
    liveSession = session;
    setLiveMenuState(session);
    updateLiveSessionProgress(session);
    liveElement('liveProgressColumns').hidden = false;
    const url = new URL(location.href);
    url.hash = 'live=' + room + (host ? '&role=host' : '');
    history.replaceState(history.state, '', url);
    if (saved?.ready) restoreLiveView(session, saved);
    saveLiveSession();
    connectLiveSession(session);
}

function restoreLiveView(session, saved) {
    session.restoring = true;
    liveElement('liveDialog').close();
    liveElement('liveBanner').hidden = false;
    if (activeQuestion && session.shown) renderQuestionScenario(activeQuestion, saved.values);
    if (activeQuestion && saved.phase === 'setupPhase') {
        setupCreativity(activeQuestion.text);
        document.querySelectorAll('#inputContainer input').forEach((input, index) => {
            input.value = saved.inputs[index] || '';
        });
    } else if (saved.phase !== 'reviewPhase') {
        waitForLiveQuestion(saved.status || 'Rejoining Live Review…');
    }
    liveElement('cancelLiveEdit').hidden = !session.editing;
    setLiveRatingEnabled(Boolean(session.shown && !session.rated));
    showLiveRatingWait(session);
    updateLiveEditButton(session);
    liveElement('livePartnerName').textContent = session.partnerName || '';
    liveElement('livePartner').hidden = !session.partnerName;
    setLiveStatus(saved.status || 'Rejoining Live Review…');
    session.restoring = false;
}

function initializeLivePair(session) {
    if (session.ready) return;
    session.ready = true;
    liveElement('liveDialog').close();
    liveElement('liveBanner').hidden = false;
    document.querySelector('.btn-back').hidden = true;
    setLiveRatingEnabled(false);
    waitForLiveQuestion(session.host
        ? 'Connected. Finding questions due for both of you…'
        : 'Connected. Waiting for the first shared question.');
    sendLive({ type: 'profile', name: currentProfile.trim().slice(0, 120) || 'Guest', scenarioEdits: true, inputTurns: true });
    if (!session.host) sendLive({ type: 'queue', ids: [...session.queue] });
}

function connectLiveSession(session) {
    const { host, room } = session;
    const channel = new WebSocket(liveReviewEndpoint + '/live/' + room + '/' + (host ? 'host' : 'guest') + '?token=' + session.token);
    session.channel = channel;
    channel.addEventListener('open', () => {
        if (session !== liveSession || channel !== session.channel) return;
        for (const message of session.outbox) channel.send(JSON.stringify(message));
    });
    channel.addEventListener('message', event => {
        if (session !== liveSession || channel !== session.channel || typeof event.data !== 'string' || event.data.length > 128000) return;
        let message;
        try {
            message = JSON.parse(event.data);
        } catch {
            return;
        }
        if (message?.type === 'ended') {
            showLiveEnded();
            return;
        }
        if (message?.type === 'ack' && Number.isSafeInteger(message.clientSeq)) {
            session.outbox = session.outbox.filter(item => item.clientSeq > message.clientSeq);
            saveLiveSession();
            return;
        }
        if (Number.isSafeInteger(message?.serverSeq)) {
            if (message.serverSeq <= session.lastReceived) {
                channel.send(JSON.stringify({ type: 'ack', serverSeq: message.serverSeq }));
                return;
            }
            session.lastReceived = message.serverSeq;
        }
        if (message?.type === 'inviting' && host && !session.ready) {
            const url = new URL(location.href);
            url.hash = 'live=' + room;
            liveElement('liveShare').value = url.href;
            liveElement('liveShareControls').hidden = false;
            setLiveStatus('Share this private link with your partner.');
        } else if (message?.type === 'connected') {
            session.retries = 0;
            initializeLivePair(session);
        } else if (message?.type === 'resumed') {
            session.retries = 0;
            if (message.paired) initializeLivePair(session);
            else {
                const url = new URL(location.href);
                url.hash = 'live=' + room;
                liveElement('liveShare').value = url.href;
                liveElement('liveShareControls').hidden = false;
            }
            liveElement('liveStatus').textContent = message.partnerOnline ? session.status || 'Reconnected.'
                : 'Waiting for your partner to reconnect. Your place is saved.';
        } else if (message?.type === 'partner-disconnected') {
            liveElement('liveStatus').textContent = 'Your partner disconnected. Waiting for them to reconnect…';
        } else if (message?.type === 'partner-reconnected') {
            initializeLivePair(session);
            liveElement('liveStatus').textContent = session.status || 'Your partner reconnected.';
        } else if (session.ready) {
            receiveLiveMessage(session, message);
        }
        saveLiveSession();
        if (Number.isSafeInteger(message?.serverSeq)) channel.send(JSON.stringify({ type: 'ack', serverSeq: message.serverSeq }));
    });
    channel.addEventListener('close', event => {
        if (session !== liveSession || channel !== session.channel) return;
        if (event.code === 1000 || event.code === 4001 || Date.now() - parseInt(room, 36) > liveRoomLifetime) {
            showLiveEnded(event.code === 4001 ? 'This session was opened in another connection.' : undefined);
            return;
        }
        liveElement('liveBanner').hidden = false;
        liveElement('liveStatus').textContent = session.retries < 6
            ? 'Connection interrupted. Reconnecting…'
            : 'Could not reconnect. Reload to try again, or leave Live Review.';
        if (session.retries < 6) {
            session.retryTimer = setTimeout(() => {
                if (session === liveSession) connectLiveSession(session);
            }, Math.min(1000 * 2 ** session.retries++, 10000));
        }
        saveLiveSession();
    });
}

function showLiveEnded(message = 'This session has ended.') {
    endLiveReview(false);
    liveElement('liveBanner').hidden = false;
    liveElement('restartLiveReview').hidden = false;
    setLiveStatus(message);
}

function endLiveReview(notify = true) {
    if (pendingLiveInvite) {
        pendingLiveInvite = null;
        history.replaceState(history.state, '', location.pathname + location.search);
        liveElement('liveGuestProfile').hidden = true;
        liveElement('liveDialog').close();
        init();
        return;
    }
    const session = liveSession;
    if (notify && session?.channel.readyState === WebSocket.OPEN) session.channel.send(JSON.stringify({ type: 'leave' }));
    clearTimeout(session?.retryTimer);
    if (session) {
        try { sessionStorage.removeItem(liveStorageKey(session.room, session.host)); } catch { /* Storage may be unavailable. */ }
        history.replaceState(history.state, '', location.pathname + location.search);
    }
    liveSession = null;
    liveElement('liveProgressColumns').hidden = true;
    liveElement('startLiveReview').hidden = false;
    liveElement('leaveLiveReview').hidden = true;
    session?.channel.close();
    liveElement('liveDialog').close();
    liveElement('liveBanner').hidden = true;
    liveElement('livePartner').hidden = true;
    liveElement('livePartnerName').textContent = '';
    setLiveMenuState(null);
    const back = document.querySelector('.btn-back');
    back.hidden = false;
    back.textContent = '← Edit inputs';
    liveElement('cancelLiveEdit').hidden = true;
    setLiveRatingEnabled(true);
    if (session) loadNextQuestion();
}

function setLiveMenuState(session) {
    liveElement('chapterFilter').inert = Boolean(session && !session.host);
    const menu = liveElement('menu-tools');
    const progress = liveElement('progressContainer');
    menu.classList.remove('show-menu');
    liveElement('profileMenu').hidden = Boolean(session);
    liveElement('liveProfile').hidden = !session;
    liveElement('liveProfileNameLabel').textContent = session ? currentProfile : '';
    if (session) liveElement('liveProgress').append(progress);
    else menu.prepend(progress);
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
    const session = liveSession;
    const outgoing = { ...message, clientSeq: ++session.nextClientSeq };
    session.outbox.push(outgoing);
    saveLiveSession();
    if (session.channel.readyState === WebSocket.OPEN) session.channel.send(JSON.stringify(outgoing));
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
        session.partnerName = message.name;
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
        waitForLiveQuestion('Your partner is filling in the inputs.');
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
    saveLiveSession();
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
    saveLiveSession();
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

function updateLiveSessionProgress(session) {
    const ratings = Object.values(session.ratings);
    liveElement('liveMasteredCount').textContent = ratings.filter(status => status === 'confident').length;
    liveElement('liveNeedsReviewCount').textContent = ratings.filter(status => status === 'review').length;
}

function rateLiveQuestion(status) {
    const session = liveSession;
    session.ratings[activeQuestion.id] = status;
    updateLiveSessionProgress(session);
    session.rated = true;
    showLiveRatingWait(session);
    setLiveRatingEnabled(false);
    setLiveStatus('');
    sendLive({ type: 'rated', id: activeQuestion.id, revision: session.revision });
    if (session.host && session.partnerRated) nextLiveQuestion();
}
