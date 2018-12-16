const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
  res.send({Hola: 'nati'})
})

const PORT = 3000

const server = app.listen(PORT, () => {
  console.log(`Listening http://localhost:${server.address().port}`)
})
