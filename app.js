const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routes/productRoute");

const app = express();

// 1) MIDDLEWARES
// Set security HTTP headers

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Data sanitization against NoSQL query injection

// Prevent parameter pollution

// serving static files
// Routes
app.use("/api/v1/products", productRouter);

// global error handling middleware

module.exports = app;
