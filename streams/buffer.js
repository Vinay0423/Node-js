
// let buffer= Buffer.from("Vinay")
// console.log(buffer.toString());


//buffer size handling
const fs= require('fs')

const readStream=fs.createReadStream('./index.txt',{
    encoding:"utf-8",
    highWaterMark:6
})

readStream.on("data",(chunk)=> {
   console.log(chunk);
})