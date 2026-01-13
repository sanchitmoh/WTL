const EventEmitter = require('events');

// Create event emitter object
const eventEmitter = new EventEmitter();

// Event listener
eventEmitter.on('welcome', () => {
    console.log('Welcome Event Triggered!');
});

// Trigger event
eventEmitter.emit('welcome');
