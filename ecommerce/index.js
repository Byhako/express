const express = require('express')
const app = express()
const path = require('path')
const productsRouter = require('./routes/products')


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// establecemos endpoints
app.use('/products', productsRouter )
app.use('/static', express.static(path.join(__dirname, 'public')))


const PORT = 8000
const server = app.listen(PORT, () => {
  console.log(`Listenin http://localhost:${server.address().port}`)
})
