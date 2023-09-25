const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// middlewares
app.use(express.json());

// all routes
app.use("/", (req, res)=>{
    return res.send({
        message:"Blog App started"
    })
});

// app is starting on the port
app.listen(process.env.APP_PORT, () => {
  console.log("App is starting on port " + process.env.APP_PORT);
});
