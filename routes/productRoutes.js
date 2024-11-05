const express = require("express");
const productRoutes = express.Router();
const renderView = require("../helpers/renderView");
const productsController = require("../controllers/productsController");
productRoutes.get("/products", productsController.getProducts);
productRoutes.get("/product-detail", (req, res) => {
  renderView("product-detail", req, res);
});

module.exports = productRoutes;
