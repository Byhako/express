const express = require('express')
const app = express()
const expressJsx = require('./express-jsx')

// Register engine
app.engine('jsx', expressJsx)

// select engine
app.set('views', './views')
app.set('view engine', 'jsx')

app.get('/', (req, res) => {
  res.render('index', {Hello: 'Hola', World: 'Mundo'})
})

const PORT = 8000
const server = app.listen(PORT, () => {
  console.log(`Listenin http://localhost:${server.address().port}`)
})
