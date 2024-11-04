const express = require('express');
const productRoutes = express.Router();
const renderView = require('../helpers/renderView');

productRoutes.get('/products', (req, res) => {
    renderView('products', req, res);
});
productRoutes.get('/product-detail', (req, res) => {
    renderView('product-detail', req, res);
});

module.exports = productRoutes;
