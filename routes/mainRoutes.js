const authRoutes = require("../routes/authRoutes");
const pageRoutes = require("../routes/pageRoutes");
const productRoutes = require("../routes/productRoutes");

module.exports = function (app) {
  app.use(authRoutes);
  app.use(pageRoutes);
  app.use(productRoutes);
};
