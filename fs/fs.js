// const fs = require('fs')
const fs = require('fs/promises')

//synchronous

// fs.writeFileSync("./index.txt",'value taken')

// const data=fs.readFileSync('./index.txt')
// console.log(data.toString());

// fs.appendFileSync("./index.txt",'\n updates value')

// fs.unlinkSync("./index.txt")


//handling async using callbacks

// fs.writeFile("./asyncFile.txt", "input value given", (err) => {
//     if (err) {
//         console.log('error logged');
//     }
// })

fs.readFile("./asyncFile.txt", "utf-8", (err, data) => {
    if (data) {
        console.log(data.toString());
    } else {
        console.log(err);
    }
})

// fs.appendFile("./asyncFile.txt", "\n updated value given", err => {
//     if (err) {
//         console.log(err);
//     } else{
//         console.log("file updated");
//     }
// })


// fs.unlink("./asyncFile.txt",(err)=> {
//     if(err){
//         console.log('file deleted');
//     }
// })

// fs.mkdir('./',(err)=>{
// if(err) log(err);
//     console.log('folder created');
// })


// Execerise


// fs.mkdir("./public",(err)=> {
//     if(err) console.log(err);
//     console.log("public folder created");
// })
// fs.writeFile("./public/index.html","", (err)=> {
//     if(err) console.log(err);
//     console.log("file created");
// })
// fs.writeFile("./public/index.css","",(err)=> {
//     if(err) console.log(err);
//     console.log("file created");
// })
// fs.writeFileSync("./public/index.js","",(err)=> {
//     if(err) console.log(err);
//     console.log("file created");
// })

// fs.mkdir("./model",(err)=> {
//     if(err) console.log(err);
//     console.log("model folder created");
// })

// fs.writeFile("./model/task.js","",(err)=> {
// if(err)console.log(err);
// console.log("file created");
// })

// fs.mkdir("./views",(err)=> {
//     if(err) console.log(err);
//     console.log("views folder created");
// })

// fs.writeFileSync("./views/view.html","",(err)=>{
//     if(err) console.log(err);
//     console.log("file created");
// })


// handling fs using promise
// let res= fs.readFile("./asyncFile.txt","utf-8")
// console.log(res);// promise<pending>


// fs.writeFile("./index.txt", "new file").then(() => {
//     console.log("file created");
// }).catch((err) => {
//     console.log(err);
// });

// fs.readFile("./asyncFile.txt", "utf-8").then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// fs.appendFile("./index.txt", "\n updates").then(() => {
//     console.log("Updated");
// }).catch((err) => {
//     console.log(err);
// });

// fs.unlink("./index.txt").then((result) => {
//     console.log('file deleted');
// }).catch((err) => {
//     console.log(err);
// });

// fs.mkdir('../newFolder').then((result) => {
//     console.log("folder created");
// }).catch((err) => {
//     console.log(err);
// });

// fs.rmdir("../newFolder").then((result) => {
//     console.log("folder deleted");
// }).catch((err) => {
//     console.log(err);
// });


//using async and await 
// async function writePromise(){
//     try {
//          await fs.writeFile("./promise.txt","")
//         console.log("file created");
//     } catch (error) {
//         console.log(error);
//     }
// }

// writePromise()

// async function readPromise(){
//     try {
//         let data= await fs.readFile("./promise.txt","utf-8")
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// readPromise()

// async function appendPromise(){
//     try {
//          await fs.appendFile("./promise.txt","\n value modified")
//          console.log('value updated');
//     } catch (error) {
//         console.log(error);
//     }
// }

// appendPromise()

// async function unlinkPromise(){
//     try {
//          await fs.unlink("./promise.txt")
//          console.log('file deleted');
//     } catch (error) {
//         console.log(error);
//     }
// }

// unlinkPromise()

// async function mkdirPromise(){
//     try {
//         await fs.mkdir("../async&await")
//         console.log('folder created');
//    } catch (error) {
//        console.log(error);
//    }
// }

// async function rmkdirPromise(){
//     try {
//         await fs.rmdir("../async&await")
//         console.log('folder deleted');
//    } catch (error) {
//        console.log(error);
//    }
// }

// mkdirPromise()
// rmkdirPromise()

