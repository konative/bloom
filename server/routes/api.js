const express = require("express");
const Listing = require("../models/businessModel.js");
const User = require("../models/userModel.js");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send("hi");
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

//Find listing that belong to owner
router.get("/owners", async (req, res) => {
  const owner = req.query.user;
  console.log(owner);
  const foundUser = await Listing.find({ owner: owner });
  console.log(foundUser);
  res.send(JSON.stringify(foundUser));
});

//Edit logic
router.post("/edit/:id", async (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  console.log(id);
  await Listing.findByIdAndUpdate(id, {
    name: req.body.busName,
    phoneNum: req.body.phoneNum,
    address: req.body.address,
    description: req.body.desc,
  });

  res.send(JSON.stringify({ success: true }));
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

//Login authorization
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

//Authorize current user
router.post(
  "/auth",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send({ status: "confirmed" });
  }
);

router.post("/register", async (req, res) => {
  const regUser = req.body.registerUser;
  const regPass = req.body.registerPass;
  const checkDuplicate = await User.exists({ user: regUser });
  if (checkDuplicate) {
    res.send({ success: false });
  }
  if (!checkDuplicate) {
    await User.create({ user: regUser, pass: regPass });
    const token = jwt.sign({ username: regUser }, "secret", {
      expiresIn: 86400 * 30,
    });
    return res.json({ success: true, token: token });
  }
});
module.exports = router;
