const express = require('express')
const router = express.Router()

const myProducts = [
  {
    name: 'Pan',
    price: 1,
    image: 'http://www.recetasdethermomix.es/wp-content/uploads/2013/02/pan-naranja-confitada-thermomix-400x300.jpg'
  },
  {
    name: 'Leche',
    price: 3,
    image: 'http://apsal.org/wp-content/uploads/2016/12/Leche_de_vaca.jpg'
  }
]

router.get('/', (req, res) => {
  res.render('products', {myProducts})
})

module.exports = router
