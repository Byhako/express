const express = require('express')
const router = express.Router()
// const productsMocks = require('../utils/moks/products')
const ProductsService = require('../../services/products')
const { config } = require('../../config')

const productsService = new ProductsService()

const cacheResponse = require('../../utils/cacheResponse')
const { FIVE_MINUTES_IN_SECONDS } = require('../../utils/time')

router.get('/', async (req, res, next) => {
  cacheResponse(req, FIVE_MINUTES_IN_SECONDS)
  const {tags} = req.query

  try {
    const productsFake = await productsService.getProducts({tags})
    res.render('products', {productsFake, dev: config.dev})
  } catch (error) {
    next(error)
  }
})

module.exports = router
