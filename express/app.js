import express from 'express'
import dotenv from 'dotenv'


//loading the env file data
dotenv.config()


//app instance---- top level function
let app= express()

// // http://localhost/
// app.get('/',(req,res,next)=>{
//    res.send('Home page found')
// })

// // http://localhost/about
// app.get('/about',(req,res,next)=>{
//    res.send('about page found')
// })


// function parse(req,res,next){
//     console.log("parse middleware");
//     next()
// }

// function auth(req,res,next){
//     console.log("auth middleware");
//     next()
// }

//app.use() function is used to mount the specified middleware function(s) at the path that is being specified. 

// app.use("/home",function(req,res,next){
//     console.log("parse middleware");
//     next()
// },function(req,res,next){
//     console.log("auth middleware");
//     next()
// }
// )

// app.get('/home,(req,res,next)=>{
//     res.send("home page")
// })')
   
//   **********************************************

// app.get("/home",function(req,res,next){
//     console.log("parse middleware");
//     next()
// },function(req,res,next){
//     console.log("auth middleware");
//     next()
// },(req,res,next)=>{
//     res.send("home page")
// })

// app.get("/about",(req,res,next)=>{
//     res.send("about page")
// })

// // http://localhost/contact
// app.get('/contact',(req,res,next)=>{
//    res.send('contact page found')
// })

// ***************************

// function logOriginalUrl (req, res, next) {
//    console.log('Request URL:', req.originalUrl)
//    next()
//  }
 
//  function logMethod (req, res, next) {
//    console.log('Request Type:', req.method)
//    next()
//  }
 
//  const logStuff = [logOriginalUrl, logMethod]


//  app.get('/user/:id',logStuff,(req, res, next) => {
//    res.send('User Info')
//  })

//  ***************************************

app.get('/user/:id', (req, res, next) => {
    // if the user ID is 0, skip to the next route
    console.log(req.params.id);
    if (req.params.id === '0') next('route')
    // otherwise pass the control to the next middleware function in this stack
    else next()
  }, (req, res, next) => {
    // send a regular response
    res.send('regular')
  })
  
  // handler for the /user/:id path, which sends a special response
  app.get('/user/:id', (req, res, next) => {
    res.send('special')
  })


export default app;