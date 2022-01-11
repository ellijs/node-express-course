// use http module
const http = require('http')

// creating server
const server = http.createServer((req, res) => {
    console.log('user hit the server')
    res.end('home page')
})

// setting up port 
server.listen(5000)
