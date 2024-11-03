const express = require('express');
const productRoutes = express.Router();

productRoutes.get('/products', (req, res) => {
    res.render('../views/products.pug');
});
productRoutes.get('/product-detail', (req, res) => {
    res.render('../views/product-detail.pug');
});

module.exports = productRoutes;
