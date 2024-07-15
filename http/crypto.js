const {crypto, createHmac}= require('crypto')


let hashedPwd= createHmac("sha256","125678886").update("i love cupcake").digest('hex')
console.log(hashedPwd);