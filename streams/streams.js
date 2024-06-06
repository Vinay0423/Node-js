const { log } = require('console')
const fs=require('fs');
const { createGzip } = require('zlib');


//creating reading and writing streams

// let readStream=fs.createReadStream("./index.txt")
// readStream.on('data',(chunks)=> {
//     console.log("++++++chunk++++++");
//     console.log(chunks);
// })


// let writeStream=fs.createWriteStream("./demo.txt")

// writeStream.write('good evening',(err)=> {
//    (err)? console.log(err): null
// })



// +++++++++++ copying the readstream data into writestream +++++++++++
// let writeStream=fs.createWriteStream("./demo.txt")
// let readStream=fs.createReadStream("./index.txt")

// readStream.on('data', (chunks)=> {
// writeStream.write(chunks,err=> {
//     if(err) console.log(err);
// })
// })

//duplex stream

// to copy readtsream file data to writestream file
// readStream.pipe(writeStream)


//transform stream-- zlib library is needed

const gzip= createGzip()



let readStream= fs.createReadStream('./index.txt','utf-8')
let writeStream= fs.createWriteStream('./test.txt.gz')

readStream.pipe(gzip).pipe(writeStream)