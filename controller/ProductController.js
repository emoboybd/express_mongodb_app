// import mongodb models here
const Product = require("../models/productModel");

exports.getAllProducts = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      status: "All ok",
    },
  });
};
