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

router.get(
  "/isLogged",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    res.send(JSON.stringify({ name: "TRUE" }));
  }
);

// router.get("/isLogged", async (req, res, next) => {
//   // const { user, pass } = req.body;
//   passport.authenticate("jwt", (err, user) => {
//     console.log("user" + user);
//     if (err) {
//       return next(err);
//     }
//     if (!user) {
//       return res.send(JSON.stringify({ status: "False" }));
//     }
//   })(req, res, next);
// });

// router.get("/isLogged", (req, res, next) => {
//   passport.authenticate("local", { session: false }),
//     (req, res) => {
//       if (true) {
//         res.send(JSON.stringify({ name: "name" }));
//       }
//       if (!req.user) {
//         res.json(false);
//       } else {
//         res.json(req.user);
//       }
//     };
// });

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
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send(JSON.stringify({ status: "Invalid Login" }));
    }
    req.login(user, { session: false }, () => {
      const body = { username: user.name };
      const token = jwt.sign({ username: body }, "secret", {
        expiresIn: 86400 * 30,
      });
      return res.json({ success: true, token });
    });
  })(req, res, next);
});

router.post(
  "/auth",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send({ status: "confirmed" });
  }
);

module.exports = router;
