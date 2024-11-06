const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  img: String,
  catego: String,
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
