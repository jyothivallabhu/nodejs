const EventEmitter = require('events')
// invoke it
const customEmitter = new EventEmitter()
//basic setup and explanation below the code
customEmitter.on('response', () => {
    console.log('first emitter example');   
})

customEmitter.on('response', () => {
    console.log('some other logic can write here, means for single event we can write different logics');   
})

customEmitter.on('response', (name, dob) => {
     console.log(`Name: ${name}, DOB: ${dob}`);   
})
customEmitter.emit('response', 'jyothi', 'sep 20')
/* event driven programing is heavily used in NodeJS
it listens the sepcific events and register the functions that will execute in response those events, so once our event takes place call back function fires. 
there are many methods on this but we will use on and emit
on to listen for an event
emit - emits an event
*/

//name on lister and emitt should be same, should match (here response is the name of event)
//some other logic can write here, means for single event we can write different logics
//the order of on and emit matters, if we emit before listen it will not give any response
// we can pass multiple arguments also example 
// in first 2 functions it wasnt looking for those arguments, i just dont have access to arguments bcoz i dont have parameters, its not broke 

