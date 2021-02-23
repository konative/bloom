const express = require("express");
const Listing = require("../models/businessModel.js");
const User = require("../models/userModel.js");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

//Get homepage **NOT APPLICABLE**
router.get("/", (req, res) => {
  res.send("hi");
});

router.get("/isLogged", (req, res, next) => {
  passport.authenticate("jwt", { session: false }),
    (req, res) => {
      if (!req.user) {
        res.json(false);
      } else {
        res.json(req.user);
      }
    };
});

//Get required listings from DB
router.get("/listings", async (req, res) => {
  searchTerm = req.query.searchTerm;
  const allListings = await Listing.find({}); //Return all documents (businesses)
  try {
    console.log(searchTerm);
    if (searchTerm == "") {
      res.send(allListings);
    } else {
      const filteredArray = allListings.filter((listing) => {
        return listing.name
          .toLowerCase()
          .includes(`${searchTerm.toLowerCase()}`);
      });
      res.send(filteredArray);
    }
  } catch (error) {
    console.log(error);
  }
});

//Post new listing
router.post("/newListing", async (req, res) => {
  const listingInfo = req.body;
  const newListing = Listing(listingInfo);
  try {
    await newListing.save();
    res.status(201); //Successfully created
  } catch (error) {
    console.log("Could not save new listing to database");
    console.log(error.message);
  }
});

router.post("/login", async (req, res, next) => {
  // const { user, pass } = req.body;
  passport.authenticate("local", (err, user) => {
    console.log("name api.js/50" + user);
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send(JSON.stringify({ status: "False" }));
    }
    req.login(user, () => {
      const body = { name: user.name };
      const token = jwt.sign({ user: body }, "secret", {
        expiresIn: 86400 * 30,
      });
      return res.json({ token });
    });
  })(req, res, next);

  // console.log(user);
  // console.log(pass);
  // try {
  //   const foundUser = await User.find({ user: user, pass: pass });
  //   console.log(foundUser);
  //   console.log("DB SEARCH: " + foundUser);
  //   if (foundUser.length == 1) {
  //     return res.json(true);
  //   } else {
  //     return res.json(false);
  //   }
  // } catch (e) {
  //   console.log(e);
  // }
});

module.exports = router;
