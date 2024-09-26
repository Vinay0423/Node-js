
const { log } = require('console')
const fs = require('fs')

// const data=fs.readFileSync('./asyncFile.txt')
// console.log(data.toString());


// fs.readFile('./asyncFile.txt','utf-8',(err,data)=> {

//     if(err) console.log(err);
//     if(data) console.log(data);
    
    
// })

// fs.writeFile('./testfile.txt',"\n hello this is new line",{flag:'a'}, (err)=> {

//     (err)? console.log(err): console.log('written file successfuly');

    
// })

// fs.unlink('./testfile.txt',(err)=> {
//     (err)? console.log(err): console.log('deleted file successfuly');
// })

fs.readFile('./testfile.txt','ascii',(err,data)=> {

    if(err) console.log(err);
    if(data) console.log(data);
    
    
})

fs.readdir('.',(err,files)=> {
if(err) console.log(err);
if(files)  console.log(files);


})