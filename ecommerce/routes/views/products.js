const express = require('express')
const router = express.Router()
// const productsMocks = require('../utils/moks/products')
const ProductsService = require('../../services/products')

const productsService = new ProductsService()


router.get('/', async (req, res, next) => {
  const {tags} = req.query

  try {
    const productsFake = await productsService.getProducts({tags})
    res.render('products', {productsFake})
  } catch (error) {
    next(error)
  }
})

module.exports = router
