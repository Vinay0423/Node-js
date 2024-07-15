import express from 'express'
import dotenv from 'dotenv'


//loading the env file data
dotenv.config()


//app instance---- top level function
let app= express()


let parse=function parse(){
console.log('body parse completed');
next()
}

let auth=function auth(){
console.log('body parse completed');
next()
}

app.use(parse);

app.get('/home',(req,res,next)=> {
res.send('Home page')
})

app.get('*',(req,res,next)=> {
   res.send('no page found')
})


export default app;