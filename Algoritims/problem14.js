// ### 14. Skapa en event emitter
// **Problem:** Implementera en enkel event emitter-klass med metoderna on(), emit() och off().

// **Användningsexempel:**
// ```javascript
// const emitter = new EventEmitter();
// emitter.on('test', (data) => console.log('Event:', data));
// emitter.emit('test', 'Hello World'); // Output: "Event: Hello World"

const EventEmitter = require('node:events');
const emitter = new EventEmitter();

emitter.on('start', () => {
    console.log("Event Started");
});

emitter.on('send', (data) => {
    console.log(`Trying to send ${data}`);
});

emitter.off('close', () => {
    console.log("Event has ended!");
});

const intel = "Important Data"

emitter.emit('start');
emitter.emit('send', intel);
emitter.emit('close');

