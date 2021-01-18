const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const { allowedNodeEnvironmentFlags } = require("process");
const mongoURL = "mongodb://localhost:27017/bloom";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const Business = require("./models/businessModel");

//Connect to local Mongo database
mongoose
  .connect(mongoURL, options)
  .then(() => {
    console.log("Connected to bloom database");
    app.listen(3000, () => {
      console.log("Online @ port 3000");
  })
  })
  .catch((err) => {
    console.log("Error could not connect");
    console.log(err.message);
  });

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
