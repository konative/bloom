const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const { allowedNodeEnvironmentFlags } = require("process");
const mongoURL = "mongodb://localhost:27017/bloom";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const listingRoutes = require("./routes/api.js");
const cors = require("cors");
const passport = require("passport");

//Connect to local Mongo database
mongoose
  .connect(mongoURL, options)
  .then(() => {
    console.log("Connected to bloom database");
    app.listen(5000, () => {
      console.log("Backend server Online @ port 5000");
    });
  })
  .catch((err) => {
    console.log("Error could not connect");
    console.log(err.message);
  });
mongoose.set("useFindAndModify", false);

app.use(passport.initialize());

require("./auth/auth.js");

app.set("view engine", "ejs");
app.use(cors()); //Needs to be updated before deployment for safety issues
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use("/", listingRoutes);
