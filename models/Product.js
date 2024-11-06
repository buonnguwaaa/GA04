const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  img: String,
  catego: String,
});

const Products = mongoose.model("product", productsSchema);

module.exports = Products;
