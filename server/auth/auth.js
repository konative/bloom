const localStrategy = require("passport-local").Strategy;
const passport = require("passport");
const User = require("../models/userModel.js");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const user = { id: 1, name: "bob", pass: "pass" };
//LOGIN AUTH
passport.use(
  new localStrategy((username, password, done) => {
    if (username == user.name && password == user.pass) {
      console.log("LOCALSTRAT-JWT");
      return done(null, user);
    }
    return done(null, false, { message: "Could not login" });
  })
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
      secretOrKey: "secret",
    },
    (jwt_payload, done) => {
      try {
        console.log("JWT-STRAT");
        if (user.name === jwt_payload.username.username) {
          //Verification of User
          return done(null, user);
        } else {
          return done(null, false, {
            message: "Token not found",
          });
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);
