const EventEmitter= require('events')
const Pizza= require('./pizza')
const Serve = require('./Serve')
const Process=require('process')

const pizza= new Pizza()
const serve= new Serve()


pizza.on('order',(size,toppings)=> {
    console.log(`the pizza size is ${size} and added ${toppings} on above the pizza`);
    serve.serve(size)
})

pizza.order('large','mushroom')




console.log(process.argv);





// const emitter=new EventEmitter()

// emitter.on('order',(size,toppings)=> {
// console.log(`the pizza ${size} is and added ${toppings} on below`);
// })

// emitter.emit('order','medium','mushroom')