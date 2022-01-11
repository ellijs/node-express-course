// use http module
const http = require('http')

// creating server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type' : 'text/html'})
    res.write('<h1>home page</h1>')
    res.end()
})

// setting up port 
server.listen(5000)


// MIME Types - MDN
// Status Code - MDN