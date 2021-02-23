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
const localStrategy = require("passport-local");
const passportJWT = require("passport-jwt");

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

JWTStrategy = passportJWT.Strategy;
app.use(passport.initialize());
const user = { id: 1, name: "bob", pass: "pass" };

passport.use(
  new localStrategy((username, pass, done) => {
    if (username == user.name && pass == user.pass) {
      console.log("LOCALWORK");
      return done(null, user);
    }
    return done(null, false, { message: "didnt work line39/index.js" });
  })
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "secret",
    },
    (jwtPayload, done) => {
      if (user.id === jwtPayload.user._id) {
        //Verification of User
        return done(null, user);
      } else {
        return done(null, false, {
          message: "Token not matched",
        });
      }
    }
  )
);

app.set("view engine", "ejs");
app.use(cors()); //Needs to be updated before deployment for safety issues
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use("/", listingRoutes);
