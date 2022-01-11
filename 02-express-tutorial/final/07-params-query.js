const express = require('express')
const app = express()
const { products } = require('./data')


app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
  // can be selective from data
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })

  res.json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
  // console.log(req)
  // console.log(req.params)  => { productId: "1" } always return string

  const { productID } = req.params
 
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params) //=> { productId: '4', reviewId: "abc" }
  res.send('hello world')
})

// url parameter

app.get('/api/v1/query', (req, res) => {
  //  /query?search=a&limit=2  => return include 'a' and limit 2
  // /query?name=john&id=4
  // console.log(req.query)  =>  { name: 'john', id: '4' }

  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

// always setting up condition, you need to 'return'!!!
// not query seperated. put those in same callback



app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
