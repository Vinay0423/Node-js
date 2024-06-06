import {EventEmitter} from 'events'

class MyEmitter extends EventEmitter{}


//object/subject/emitter
let driver=new MyEmitter()

//observer 1  doctor-eventlisteners
driver.on('race won', ()=> {
    console.log('Wow,Nice match');
})


//observer 2 parents-eventlisteners
driver.on('race won', ()=> {
    console.log('We are hppy');
})

// observer 3 frineds-eventlisteners
driver.on('race won', ()=> {
    console.log('macha, party');
})


//emits the event
driver.emit('race won')