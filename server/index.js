const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const { allowedNodeEnvironmentFlags } = require("process");
const mongoURL = "mongodb://localhost:27017/bloom";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const Business = require("./models/businessModel");
const listingRoutes = require("./routes/listingRouting");

//Connect to local Mongo database
mongoose
  .connect(mongoURL, options)
  .then(() => {
    console.log("Connected to bloom database");
    app.listen(5000, () => {
      console.log("Backend server Online @ port 5000");
  })
  })
  .catch((err) => {
    console.log("Error could not connect");
    console.log(err.message);
  });

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use("/", listingRoutes);