// use http module
const http = require('http')

// creating server
const server = http.createServer((req, res) => {
    // console.log(req.method)// => GET 
    // console.log(req.url) // => '/'

    const url = req.url;

    // Home Page
    if ( url === '/') {
        res.writeHead(200, {'Content-type' : 'text/html'})
        res.write('<h1>home page</h1>')
        res.end()
    }
    // About Page 
    else if ( url === '/about') {
        res.writeHead(200, {'Content-type' : 'text/html'})
        res.write('<h1>About page</h1>')
        res.end()
    } 
    // 404
    else {
        res.writeHead(404, {'Content-type' : 'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
})

// setting up port 
server.listen(5000)


// MIME Types - MDN
// Status Code - MDN