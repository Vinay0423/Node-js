//set time out

// let id=setTimeout(() => {
//     console.log('hello');
// }, 2000);

// let id2=setInterval(()=> {
//     console.log('runs on every interval');
// })


// clearTimeout(id)
// clearInterval(id2)


// setTimeout(()=> {
//     clearInterval(id2)
// },8000)

//Promises

// 1. using then and catch
// let promise=new Promise((resolve,reject)=> {
// let a=2;
// if(a===2){
//     resolve('resolved',a)
// } else{
//     reject('rejected')
// }
// })

// promise.then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// 2. using async and await

// async function functionResolved(){
//     try {
     
//     } catch (error) {
//         console.log(error);
//     }
  
// }

//fetch

// async function fetchingData(){
//    let res= await (await fetch('https://swapi.dev/api/')).json()
//    console.log(res);
// }

// fetchingData()

let fec=new Promise((resolve,reject)=> {
let data=fetch('https://swapi.dev/api/')
if(data){
    resolve(data)
}
})

fec.then((data)=> {
console.log(data);
}).catch((error)=> {
console.log(error);
})