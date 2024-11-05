const Product = require("../models/productsModel");
const renderView = require("../helpers/renderView");

module.exports.getProducts = async (req, res) => {
  const products = await Product.find();
  console.log(products);
  renderView("products", req, res, { products });
  //renderView("products", req, res);
  //res.render("products", { products });
};