const mongoose = require("mongoose");
const productsSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
});
const Products = mongoose.model("Products", productsSchema, "Products");
module.exports = Products;
