const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('myevent',(data) => {
    console.log('on myebent:', data);
});

myEmitter.emit('myevent', 'one');

setTimeout(() => {
    myEmitter.emit('myevent', 'two');
}, 1000);
