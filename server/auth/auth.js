const localStrategy = require("passport-local").Strategy;
const passport = require("passport");
const User = require("../models/userModel.js");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

//LOGIN AUTH
passport.use(
  new localStrategy(async (username, password, done) => {
    const foundUser = await User.findOne({ user: username, pass: password });
    if (foundUser) {
      console.log("LOCALSTRAT-JWT");
      return done(null, foundUser);
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
    async (jwt_payload, done) => {
      try {
        console.log("JWT-STRAT");
        console.log(jwt_payload);

        const foundUser = await User.findOne({
          user: jwt_payload.username,
        });

        if (foundUser) {
          const username = foundUser.user;
          return done(null, username);
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
