const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { webcrypto } = require('node:crypto');

const source = fs.readFileSync(path.join(__dirname, '../live-review.js'), 'utf8');
const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
const phaseSource = html.slice(html.indexOf('        function showPhase('), html.indexOf('window.onload = init;'));
const room = Date.now().toString(36) + '-12345678-1234-4123-8123-123456789012';

function browser(storage = new Map(), href = 'https://example.test/questions/?chapters=1') {
    const nodes = new Map();
    let inputs = [];
    const node = id => {
        if (!nodes.has(id)) {
            const classes = new Set(['setupPhase', 'reviewPhase', 'completionState'].includes(id) ? ['hidden'] : []);
            nodes.set(id, {
                hidden: true, value: '', textContent: '', disabled: false,
                classList: { add: value => classes.add(value), remove: value => classes.delete(value),
                    contains: value => classes.has(value), toggle: (value, on) => on ? classes.add(value) : classes.delete(value) },
                addEventListener() {}, close() { this.open = false; }, showModal() { this.open = true; },
                reset() {}, focus() {},
                append(...children) { children.forEach(child => { child.parentNode = this; }); },
                prepend(child) { child.parentNode = this; },
                querySelector: () => node(id + '-button')
            });
        }
        return nodes.get(id);
    };
    const sockets = [];
    class Socket {
        static OPEN = 1;
        constructor(url) { this.url = url; this.readyState = 0; this.events = {}; this.sent = []; sockets.push(this); }
        addEventListener(type, handler) { this.events[type] = handler; }
        send(raw) { this.sent.push(JSON.parse(raw)); }
        close() { this.readyState = 3; }
        open() { this.readyState = 1; this.events.open(); }
        receive(message) { this.events.message({ data: JSON.stringify(message) }); }
        disconnect(code = 1006) { this.readyState = 3; this.events.close({ code }); }
    }
    const location = new URL(href);
    const timers = [];
    const context = vm.createContext({
        URL, URLSearchParams, crypto: webcrypto, location, WebSocket: Socket,
        history: { state: null, replaceState(a, b, url) { location.href = new URL(url, location).href; } },
        sessionStorage: { getItem: key => storage.get(key) || null,
            setItem: (key, value) => storage.set(key, value), removeItem: key => storage.delete(key) },
        localStorage: { setItem() {} }, window: { addEventListener() {} },
        document: { getElementById: node, querySelector: node, addEventListener() {},
            querySelectorAll: selector => selector === '#inputContainer input' ? inputs
                : selector === '#reviewPhase .tooltip-wrapper' ? [node('rating-wrapper')] : [node('locked-button')] },
        setTimeout(callback) { timers.push(callback); return timers.length; }, clearTimeout() {},
        questions: [{ id: '1', chapter: 1, text: 'Hello [name]' }, { id: '2', chapter: 1, text: 'Visit [place]' }],
        profiles: { Guest: { '1': { status: 'review' } } }, currentProfile: 'Guest', currentFilter: ['1'], sessionMemory: {},
        activeQuestion: null, currentScenarioValues: [], isQuestionAvailable: () => true,
        updateProfileDropdown() {}, initChapterFilters() {}, loadNextQuestion() {}, saveToStorage() {},
        pickReviewQuestion: (pool, order, single, preferred) => preferred || pool[0],
        setupCreativity(text) {
            if (!vm.runInContext("showPhase('setupPhase')", context)) return;
            inputs = [...new Set(text.match(/\[[^\]]*\]/g))].map(() => ({ value: '' }));
        },
        renderQuestionScenario(question, values) {
            context.currentScenarioValues = values;
            vm.runInContext("showPhase('reviewPhase')", context);
        }
    });
    vm.runInContext(source + '\nfunction getLiveSession() { return liveSession; }\n' + phaseSource, context);
    const run = code => vm.runInContext(code, context);
    return { run, node, sockets, storage, location, timers, get inputs() { return inputs; },
        get session() { return run('liveSession'); } };
}

function host() {
    const page = browser();
    page.run(`startLiveSession(true, '${room}', 'host')`);
    const socket = page.sockets[0];
    socket.open();
    socket.receive({ type: 'inviting' });
    socket.receive({ type: 'connected' });
    socket.receive({ type: 'profile', name: 'Partner', scenarioEdits: true, inputTurns: true, serverSeq: 1 });
    socket.receive({ type: 'queue', ids: ['1', '2'], serverSeq: 2 });
    page.run("shareLiveScenario(['Alice'])");
    return page;
}

test('live review closes the profile menu and moves progress until the session ends', () => {
    const page = browser();
    const menu = page.node('menu-tools');
    const progress = page.node('progressContainer');
    menu.classList.add('show-menu');
    page.run(`startLiveSession(true, '${room}', 'turns')`);
    assert.equal(menu.classList.contains('show-menu'), false);
    assert.equal(page.node('profileMenu').hidden, true);
    assert.equal(page.node('chapterFilter').parentNode, page.node('liveChapterControls'));
    assert.equal(page.node('studyInfoButton').parentNode, page.node('liveChapterControls'));
    assert.equal(page.node('liveBannerHeader').hidden, false);
    assert.equal(page.node('liveProfile').hidden, false);
    assert.equal(page.node('liveProfileNameLabel').textContent, 'Guest');
    assert.equal(progress.parentNode, page.node('liveProgress'));
    page.run('endLiveReview()');
    assert.equal(page.node('profileMenu').hidden, false);
    assert.equal(page.node('chapterFilter').parentNode, page.node('studyMenuBar'));
    assert.equal(page.node('studyInfoButton').parentNode, page.node('soloChapterControls'));
    assert.equal(page.node('liveBannerHeader').hidden, true);
    assert.equal(page.node('liveProfile').hidden, true);
    assert.equal(progress.parentNode, menu);
});

test('host reload retains its role, question, rating, chapters, and queued sends', () => {
    const page = host();
    assert.equal(page.node('liveMasteredCount').textContent, 0);
    page.run("rateLiveQuestion('confident')");
    assert.equal(page.node('liveMasteredCount').textContent, 1);
    const token = page.session.token;
    const reload = browser(page.storage, page.location.href);
    reload.run('openLiveInvite()');
    assert.equal(reload.node('liveMasteredCount').textContent, 1);
    assert.equal(reload.node('liveNeedsReviewCount').textContent, 0);
    assert.equal(reload.session.host, true);
    assert.equal(reload.session.token, token);
    assert.equal(reload.session.rated, true);
    assert.equal(reload.run('activeQuestion.id'), '1');
    assert.equal(reload.run('currentScenarioValues[0]'), 'Alice');
    assert.equal(reload.node('reviewPhase').classList.contains('hidden'), false);
    assert.equal(reload.node('rating-wrapper-button').disabled, true);
    assert.equal(reload.run('currentFilter[0]'), '1');
    const socket = reload.sockets[0];
    socket.open();
    assert.ok(socket.sent.some(message => message.type === 'rated'));
    socket.receive({ type: 'resumed', paired: true, partnerOnline: true });
    assert.equal(reload.session.rated, true);
    assert.equal(reload.session.outbox.filter(message => message.type === 'profile').length, 1);
});

test('reload restores unfinished host edits without moving the guest into inputs', () => {
    const page = host();
    page.run('editLiveScenario()');
    page.inputs[0].value = 'Unfinished edit';
    page.run('saveLiveSession()');
    const reload = browser(page.storage, page.location.href);
    reload.run('openLiveInvite()');
    assert.equal(reload.session.editing, true);
    assert.equal(reload.inputs[0].value, 'Unfinished edit');
    assert.equal(reload.node('setupPhase').classList.contains('hidden'), false);
    assert.equal(reload.node('cancelLiveEdit').hidden, false);
    reload.run('cancelLiveScenarioEdit()');
    assert.equal(reload.node('reviewPhase').classList.contains('hidden'), false);
});

test('first-time guest must name a profile before joining', () => {
    const page = browser(new Map(), `https://example.test/questions/#live=${room}`);
    page.run("profiles = {}; currentProfile = null; openLiveInvite()");
    assert.equal(page.node('liveProfileChoices').hidden, true);
    assert.equal(page.node('liveNewProfile').hidden, false);
    assert.equal(page.node('liveProfileBack').hidden, true);
    assert.equal(page.sockets.length, 0);
    page.node('liveProfileName').value = '  Alice  ';
    page.run('createLiveGuestProfile({ preventDefault() {} })');
    assert.equal(page.run('currentProfile'), 'Alice');
    assert.equal(page.sockets.length, 1);
});

test('a lone empty Guest profile opens the name form directly', () => {
    const page = browser(new Map(), `https://example.test/questions/#live=${room}`);
    page.run('profiles.Guest = {}; openLiveInvite()');
    assert.equal(page.node('liveProfileChoices').hidden, true);
    assert.equal(page.node('liveNewProfile').hidden, false);
    assert.equal(page.node('liveProfileBack').hidden, true);
    assert.equal(page.sockets.length, 0);
});

test('guest invite stays in URL and reload restores its draft inputs', () => {
    const page = browser(new Map(), `https://example.test/questions/#live=${room}`);
    page.run('openLiveInvite()');
    assert.equal(page.sockets.length, 0);
    assert.equal(page.node('liveUseProfile').textContent, 'Join as Guest');
    assert.equal(page.node('liveNewProfile').hidden, true);
    page.run('showLiveGuestProfileForm(true)');
    assert.equal(page.node('liveNewProfile').hidden, false);
    assert.equal(page.node('liveProfileBack').hidden, false);
    page.run('showLiveGuestProfileForm(false)');
    assert.equal(page.node('liveProfileChoices').hidden, false);
    page.run('joinLiveInvite()');
    const socket = page.sockets[0];
    socket.open();
    socket.receive({ type: 'connected' });
    socket.receive({ type: 'draft', id: '1', serverSeq: 1 });
    page.inputs[0].value = 'Guest draft';
    page.run('saveLiveSession()');
    const reload = browser(page.storage, page.location.href);
    reload.run('openLiveInvite()');
    assert.equal(reload.session.host, false);
    assert.equal(reload.session.draftQuestion.id, '1');
    assert.equal(reload.inputs[0].value, 'Guest draft');
    assert.ok(reload.location.hash.includes('live='));
    assert.equal(reload.session.token, page.session.token);
});

test('replayed deliveries are acknowledged without applying a rating twice', () => {
    const page = host();
    const socket = page.sockets[0];
    const before = page.session.nextClientSeq;
    socket.receive({ type: 'rated', id: '1', revision: 0, serverSeq: 3 });
    socket.receive({ type: 'rated', id: '1', revision: 0, serverSeq: 3 });
    assert.equal(page.session.partnerRated, true);
    assert.equal(page.session.nextClientSeq, before);
    assert.equal(socket.sent.filter(message => message.serverSeq === 3).length, 2);
    socket.receive({ type: 'ack', clientSeq: before });
    assert.equal(page.session.outbox.length, 0);
});

test('guest reload keeps an unrated shared question visible and accepts a queued revision', () => {
    const page = browser(new Map(), `https://example.test/questions/#live=${room}`);
    page.run('openLiveInvite()');
    page.run('joinLiveInvite()');
    const socket = page.sockets[0];
    socket.open();
    socket.receive({ type: 'connected' });
    socket.receive({ type: 'question', id: '1', values: ['Alice'], revision: 0, serverSeq: 1 });
    const reload = browser(page.storage, page.location.href);
    reload.run('openLiveInvite()');
    assert.equal(reload.session.rated, false);
    assert.equal(reload.node('reviewPhase').classList.contains('hidden'), false);
    assert.equal(reload.node('rating-wrapper-button').disabled, false);
    const reconnected = reload.sockets[0];
    reconnected.open();
    reconnected.receive({ type: 'resumed', paired: true, partnerOnline: true });
    reconnected.receive({ type: 'question', id: '1', values: ['Bob'], revision: 1, serverSeq: 2 });
    assert.equal(reload.run('currentScenarioValues[0]'), 'Bob');
    assert.equal(reload.session.revision, 1);
    assert.equal(reload.node('setupPhase').classList.contains('hidden'), true);
});

test('temporary disconnect retries, while explicit leave clears recovery state and URL', () => {
    const page = host();
    page.sockets[0].disconnect();
    assert.ok(page.session);
    assert.equal(page.timers.length, 1);
    page.timers[0]();
    const socket = page.sockets[1];
    socket.open();
    page.run('endLiveReview()');
    assert.equal(socket.sent.at(-1).type, 'leave');
    assert.equal(page.session, null);
    assert.equal(page.storage.size, 0);
    assert.equal(page.location.hash, '');
    assert.equal(page.location.search, '?chapters=1');
});

test('host can reload an unclaimed invitation and still share a guest-only link', () => {
    const page = browser();
    page.run(`startLiveSession(true, '${room}', 'guest')`);
    const reload = browser(page.storage, page.location.href);
    reload.run('openLiveInvite()');
    reload.sockets[0].open();
    reload.sockets[0].receive({ type: 'resumed', paired: false, partnerOnline: false });
    assert.equal(reload.session.ready, false);
    assert.ok(reload.node('liveDialog').open);
    assert.equal(new URL(reload.node('liveShare').value).hash, '#live=' + room);
    assert.equal(reload.session.editor, 'guest');
});

test('ended-session link clears recovery state and offers a new review without retrying', () => {
    const page = browser(new Map(), `https://example.test/questions/#live=${room}`);
    page.run('openLiveInvite()');
    page.run('joinLiveInvite()');
    const socket = page.sockets[0];
    socket.open();
    socket.receive({ type: 'ended' });
    socket.disconnect(1000);
    assert.equal(page.session, null);
    assert.equal(page.storage.size, 0);
    assert.equal(page.location.hash, '');
    assert.equal(page.node('liveStatus').textContent, 'This session has ended.');
    assert.equal(page.node('restartLiveReview').hidden, false);
    assert.equal(page.node('leaveLiveReview').hidden, true);
    assert.equal(page.timers.length, 0);
    page.run('startLiveHost()');
    assert.equal(page.node('liveDialog').open, true);
    assert.equal(page.node('liveInviteOptions').hidden, false);
    assert.equal(page.node('liveBanner').hidden, true);
});

test('ended-session message also clears a restored review and its private role link', () => {
    const page = host();
    const reload = browser(page.storage, page.location.href);
    reload.run('openLiveInvite()');
    reload.sockets[0].open();
    reload.sockets[0].receive({ type: 'ended' });
    assert.equal(reload.session, null);
    assert.equal(reload.storage.size, 0);
    assert.equal(reload.location.hash, '');
    assert.equal(reload.node('restartLiveReview').hidden, false);
});
