// @ts-ignore
const { Typed } = window;

const typed2 = new Typed('#strike', {
  strings: [
    'huddle',
    'meeting now',
    'quick call',
    'hop on a call',
    'team huddle',
    'sync up',
    'standup now',
    'urgent call',
    'video call',
    'conference',
    '📞',
    'call me',
    'zoom call',
    'teams meeting',
    'emergency call',
    'daily standup',
    'got 5 minutes?',
    'quick sync',
    'all hands',
    'scrum call',
    'status update',
    'check-in',
    'brainstorm',
    'war room',
    'retrospective',
    'planning call',
    'demo time',
    'review session',
    'one-on-one',
    'client call',
    'sprint review',
    'can we talk?',
    'urgent meeting',
    'strategy call',
    'presentation',
    'workshop',
    'kick-off',
    'follow-up',
    'debrief',
    'touch base',
    'catch up',
    'discuss',
  ],
  typeSpeed: 80,
  backSpeed: 60,
  smartBackspace: false,
  loop: true,
  shuffle: false,
  backDelay: 2000,
  startDelay: 3000,
});

// force the start of cursor animation while the `startDelay` is ticking
if (typed2.cursor != null) {
  // can't use `toggleBlinking(true)` here, as it has some extra checks
  // whether animation has started...which defeats the purpose
  typed2.cursor.classList.add('typed-cursor--blink');
}
