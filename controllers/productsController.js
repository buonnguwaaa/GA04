const Product = require("../models/productsModel");
const renderView = require("../helpers/renderView");

module.exports.getProducts = async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  renderView("products", req, res, { products });
};

// module.exports.getProductDetail = async (req, res) => {
//   const product = await Product.findById(req.params.id);
//   console.log(product);
//   res.render("product-detail", { product });
// };

module.exports.getProductDetail = async (req, res) => {
  try {
    console.log("Product ID:", req.params.id); // Logging để kiểm tra giá trị của req.params.id
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    console.log(product);
    res.render("product-detail", { product });
  } catch (error) {
    console.error("Error fetching product detail:", error);
    res.status(500).send("Internal Server Error");
  }
};
