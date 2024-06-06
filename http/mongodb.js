const http = require('http')
const fs = require('fs')
const {parse}= require('querystring')
const{}=require('')


let PORT = 5000
// let server=http.createServer((req,res)=> {
//     res.writeHead(200,"Success",{"content-type":"text/plain","accept-language":"english                                "})
// res.end('Server is running')
// })

let server = http.createServer((req, res) => {
    if (req.method === "POST") {
        if (req.headers["content-type"] === "application/x-www-form-urlencoded") {

            //data event
            let body = ""  //queryString -chunk data will be sent in these form 
            req.on("data", (chunk) => {
                body += chunk;
            })

            //event end

            req.on("end", () => {
                let parsedBody= parse(body) //parsedbody will be in object,but we can't send object to client
                res.end(JSON.stringify(parsedBody))  //converting object to string and then send to client
            })
        } else {
            res.end('Some other type of data')
        }
    }else {
        if (req.url === "/" || req === "/home") {
            res.writeHead(200, "Success", { "content-type": "text/html" })
            let html = fs.readFileSync('./home.html', "utf-8")
            res.end(html)
        } else if (req.url === '/css') {
            res.writeHead(200, "Success", { "content-type": "text/css" })
            let css = fs.readFileSync('./style.css', 'utf-8')
            res.end(css)
        }
        else {
            res.end("<h1>Ooops page not found</h1>")
        }
    }


})

server.listen(PORT, (err) => {
    console.log(err);
})