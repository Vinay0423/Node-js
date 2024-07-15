const fs= require('fs')


setTimeout(()=> {
    console.log('this is timer queue callback 1');

    process.nextTick(()=> {
        console.log('this is nested timer queue callback');
    })
},0)

setTimeout(()=> {
    console.log('this is a time queue callback 2');
})

process.nextTick(()=> {
    console.log('this is a next tick queue');
})

Promise.resolve().then(()=> {
    console.log('this is a promise queue');
})

fs.writeFile('./test.js','utf-8',(err)=> {
    if(err)console.log('file not created');
    else{
        console.log('file created');
    }
})

