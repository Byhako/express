const express = require('express')
const router = express.Router()
const productsMocks = require('../utils/moks/products')
// import {productsMocks} from '../utils/moks/products'

router.get('/', (req, res) => {
  res.render('products', {productsMocks})
})

module.exports = router
