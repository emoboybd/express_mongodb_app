// import mongodb here
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// handle uncaught exception (error handling)

dotenv.config({ path: "./config.env" });

const app = require("./app");

// Connect to mongo db database here
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB).then(() => {
  console.log("db connection successful...");
});

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});

// handle unhandled rejection (error handling)
