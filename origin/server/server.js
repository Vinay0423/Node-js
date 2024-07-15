const http = require('http')



http.createServer((req, res) => {

    let employees = [
        {
        name:"ramesh",
        skills:["html","css"],
        sal:20000
        },
        {
            name:"suresh",
            skills:["html","css","js"],
            sal:300000
        }
    ]

    res.writeHead(200,"Success",{"content-type":"application/json",
        // "access-control-allow-origin":"http://127.0.0.1:5500",
        "access-control-allow-origin":"*",

    })

    res.end(JSON.stringify(employees))


}).listen(5000, (err) => {
    if (err) console.log(err);
    console.log('the server is running on port 5000');
})