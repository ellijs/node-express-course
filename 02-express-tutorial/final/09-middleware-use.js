const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res
// app.use(logger) => 'use' invoke this to all routes
// app.use only works 이것보다 아래에 있는것만.
// app.use('/api', logger) => 'use' invoke this to any '/api' route

app.use([logger, authorize]) // execute multiple middleware function [] // 순서에 따라 실행된다. 

// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
