const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const productsRouter = require('./routes/views/products')
const productosApiRouter = require('./routes/api/products')

const {
  logErrors,
  clientErrorHandler,
  errorHandler
} = require('./utils/middlewares/errorHandlers')

const app = express()

// agrego middleware
app.use(bodyParser.json())


// views engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// establecemos endpoints

// archivos estaticos
app.use('/static', express.static(path.join(__dirname, 'public')))
// router para manejar productos
app.use('/products', productsRouter)
// router para manejo de api
app.use('/api/products', productosApiRouter)


// redirect
app.get('/', (req, res) => {
  res.redirect('/products')
})


// middleware error
app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)


const PORT = 8000
const server = app.listen(PORT, () => {
  console.log(`Listenin http://localhost:${server.address().port}`)
})
