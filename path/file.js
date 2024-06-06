
// import path from 'path'
const path = require('node:path');

//directory name
console.log(__dirname);
//filename  
console.log(__filename);


// 1. to check it is absolute path
  console.log(path.isAbsolute(__filename));  //true
  console.log(path.isAbsolute(__dirname));   //true

  console.log(path.isAbsolute('../path'));  //false


  //to join the path
 const joinnedPath01= path.join(__dirname,'file.js')
 const joinnedPath02= path.join('../path/','file.js')

 console.log(joinnedPath01);
 console.log(joinnedPath02);

//2. to convert the path into object

let parsed=  path.parse(__filename)
console.log(parsed); 

// output:
//  {
//     root: 'C:\\',
//     dir: 'C:\\Users\\Vinay\\Desktop\\Node js\\path',
//     base: 'file.js',
//     ext: '.js',
//     name: 'file'
//   }


// 3 to convert object to path

let formatted= path.format( {
    root: 'C:\\',
    dir: 'C:\\Users\\Vinay\\Desktop\\Node js\\path',
    base: 'file.js',
    ext: '.js',
    name: 'file'
  })

  console.log(formatted);

// output
// C:\Users\Vinay\Desktop\Node js\path\file.js

console.log(path.dirname(__filename)); 
console.log(path.extname(__filename));

