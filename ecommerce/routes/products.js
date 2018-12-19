const express = require('express')
const router = express.Router()

const products = [
  {
    name: 'Pan',
    price: 1
  },
  {
    name: 'Leche',
    price: 3
  }
]

router.get('/', (req, res) => {
  res.render('products', {products})
})

module.exports = router
