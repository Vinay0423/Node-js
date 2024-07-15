const crypto= require("crypto")


//synchronous code
// let start= Date.now()

// crypto.pbkdf2Sync("password","sdfsdf",10000,512,"sha512")
// crypto.pbkdf2Sync("password","sdfsdf",10000,512,"sha512")
// crypto.pbkdf2Sync("password","sdfsdf",10000,512,"sha512")

// console.log("time taken : ",Date.now()-start );


//async code

let max_time=6

let start01= Date.now()


for(let i=0;i<max_time;i++){
crypto.pbkdf2("password","sdfsdf",10000,512,"sha512",()=> {
    console.log(`time taken for call ${i+1}: `,Date.now()-start01);
})
}

