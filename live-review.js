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
            waitForLiveQuestion('Connected. Finding questions due for both of you…');
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
    document.querySelectorAll('#reviewPhase .tooltip-wrapper button').forEach(button => {
        button.disabled = !enabled;
    });
}

function receiveLiveMessage(session, message) {
    if (message?.type === 'queue' && session.host && !session.partnerQueue) {
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
    } else if (message?.type === 'rated' && session.host && session.shown && message.id === activeQuestion?.id) {
        session.partnerRated = true;
        if (session.rated) nextLiveQuestion();
    } else if (message?.type === 'done' && !session.host && (!session.shown || session.rated)) {
        session.finished = true;
        waitForLiveQuestion('No more shared questions due.');
    }
}

function nextLiveQuestion() {
    const session = liveSession;
    const shared = [...session.queue].filter(id => session.partnerQueue.has(id));
    const first = shared.includes(session.preferred);
    const id = first ? session.preferred : shared[Math.floor(Math.random() * shared.length)];
    if (!id) {
        waitForLiveQuestion('No more shared questions due.');
        sendLive({ type: 'done' });
        return;
    }
    session.queue.delete(id);
    session.shown = false;
    session.rated = false;
    session.partnerRated = false;
    activeQuestion = questions.find(question => question.id === id);
    setLiveStatus('Prepare the shared scenario for your partner.');
    if (first && session.initialValues) {
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
    setLiveRatingEnabled(true);
    setLiveStatus('Choose your own rating when you are ready.');
}

function rateLiveQuestion() {
    const session = liveSession;
    session.rated = true;
    setLiveRatingEnabled(false);
    setLiveStatus('Rating saved. Waiting for your partner.');
    sendLive({ type: 'rated', id: activeQuestion.id });
    if (session.host && session.partnerRated) nextLiveQuestion();
}
