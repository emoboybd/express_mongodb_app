const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
