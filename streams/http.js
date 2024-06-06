const http=require('http')

let PORT="5000"

let server=http.createServer((req,res)=> {
    res.writeHead(200,"Success",{"content-type":"text/plain"})
res.end('Hello world')
})

server.listen(PORT,(err)=> {
console.log(err);
console.log(`Server is running on port ${PORT}`);
})