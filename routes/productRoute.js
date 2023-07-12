const express = require("express");
// import controller for routes here
const productController = require("../controller/ProductController");

const router = express.Router();

// add protect function in AuthController + controller functions here as middlerware function
router.route("/").get(productController.getAllProducts);

module.exports = router;
