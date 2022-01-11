// use http module
const http = require('http')
// use fs module
const { readFileSync } = require('fs')



// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')


// creating server
const server = http.createServer((req, res) => {
    // console.log(req.method)// => GET 
    // console.log(req.url) // => '/'

    const url = req.url;
    console.log(url)

    // Home Page
    if ( url === '/') {
        res.writeHead(200, {'Content-type' : 'text/html'})
        // res.write('<h1>home page</h1>')
        res.write(homePage)
        res.end()
    }
    // About Page 
    else if ( url === '/about') {
        res.writeHead(200, {'Content-type' : 'text/html'})
        res.write('<h1>About page</h1>')
        res.end()
    } 
    // Styles
    else if ( url === '/styles.css') {
        res.writeHead(200, {'Content-type' : 'text/css'})
        res.write(homeStyles)
        res.end()
    }
    // image
    else if ( url === '/logo.svg') {
        res.writeHead(200, {'Content-type' : 'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    // logic
    else if ( url === '/browser-app.js') {
        res.writeHead(200, {'Content-type' : 'text/javascript'})
        res.write(homeLogic)
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

// npm install express --save