const http=require('http')


const server=http.createServer((req,res)=> {


  let students = [
    {
    name:"ramesh",
    skills:["react","node"],
    sal:20000
    },
    {
        name:"suresh",
        skills:["angular","reaact","node"],
        sal:300000
    }
]
      res.writeHead(200,'success',{
        "access-control-allow-origin":"*",
        // "access-control-allow-origin":"http://127.0.0.1:5500/",
        "content-type":"application/json"
      })

      res.end(JSON.stringify(students))
})


server.listen(5000,(err)=> {
    if(err) console.log(err);
    console.log(`server is running in 5000 port`);
})