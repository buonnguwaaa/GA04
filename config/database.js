const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Products");
    console.log("Connect to MongoDB");
  } catch (error) {
    console.log("Fail to connect to MongoDB");
  }
};

module.exports = { connect };
