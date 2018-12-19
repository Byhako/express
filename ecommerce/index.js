const express = require('express')
const path = require('path')
// const bodyParse = require('body-parse')

const productsRouter = require('./routes/products')
const productosApiRouter = require('./routes/api/products')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// establecemos endpoints

// archivos estaticos
app.use('/static', express.static(path.join(__dirname, 'public')))
// router para manejar productos
app.use('/products', productsRouter)
// router para manejo de api
app.use('/api/products', productosApiRouter)

// agrego middleware
//app.use(bodyParse.json())

const PORT = 8000
const server = app.listen(PORT, () => {
  console.log(`Listenin http://localhost:${server.address().port}`)
})
