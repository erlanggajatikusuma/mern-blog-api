const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');

// CREATE -> POST
router.post('/product', productsController.createProduct)

// READ -> GET
router.get('/products', productsController.getAllProducts)


// router.put('/products', (req, res, next) => {
//     res.json({name: "Kusuma"})
//     next();
// })


// router.delete('/products', (req, res, next) => {
//     res.json({name: "Kusuma"})
//     next();
// })

module.exports = router;