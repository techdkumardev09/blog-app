const express = require("express");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/utils/databaseConfig");
const allRoutes = require("./src/routers");
const cors = require("cors");

dotenv.config();
const app = express();

connectToDatabase(); // connect to database

// middlewares
app.use(express.json());
app.use(cors())

// all routes
app.use("/api/blog", allRoutes.blogRoute);

// app is starting on the port
app.listen(process.env.APP_PORT, () => {
  console.log("App is starting on port " + process.env.APP_PORT);
});
