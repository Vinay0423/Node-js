const fs= require('fs')

process.nextTick(()=> {
    console.log('it is an next tick callback');
})

Promise.resolve().then(()=>{
    console.log('it is an promise callback');
})


setTimeout(() => {
    console.log('it is an timer queue callback1');
    process.nextTick(()=> {
        console.log('it is an nested timer queue nexttick callback');
    })
}, 0);

setTimeout(() => {
    console.log('it is an timer queue callback2');
}, 0);

fs.readFile('./index.js',()=> {
    console.log('this is a i/o queue callback 1');
    process.nextTick(()=> {
        console.log('it is an i/o queue nested next tick');
    })
})

fs.readFile('./index.js',()=> {
    console.log('this is a i/o queue callback 2');
})

setImmediate(()=> {
    console.log('it is an check queue callback 1');
    process.nextTick(()=> {
        console.log('it is an nested check queue next tick');
    })
})
setImmediate(()=> {
    console.log('it is an check queue callback 2');
   
})

let readStream=fs.createReadStream('./index.js','utf-8')

readStream.on('close',()=> {
    console.log('it is an close queue callback1');
    process.nextTick(()=> {
        console.log('it is an  close queue nested next tick');   //In close queue, nested microtask will not execute immediately in close callback 1, it will execute after all the close callbacks executed.
    })
})

readStream.on('close',()=> {
    console.log('it is an close queue callback2');
})

readStream.close()