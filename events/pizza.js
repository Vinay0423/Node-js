const { EventEmitter } = require("stream");


let i= 
class Pizza extends EventEmitter{
    constructor(){
        super()
        this.orderCount=0;
    }

    order(size,toppings){
        this.orderCount++
        this.emit('order',size,toppings)
    }

    display(){
        console.log(`the order count is ${this.orderCount}`);
    }

   
}

module.exports=Pizza