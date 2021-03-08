const express = require("express");
const Listing = require("../models/businessModel.js");
const router = express.Router();

//Get required listings from DB
router.get("/", async (req, res) => {
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

router.get("/listings/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    const listingData = await Listing.findById(id);
    res.send(listingData);
  } catch (error) {
    console.log(error.message);
    res.send("NOT FOUND");
    console.log(listingData);
  }
});

//Post new listing
router.post("/listings", async (req, res) => {
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

router.get("/owners", async (req, res) => {
  const owner = req.query.user;
  console.log(owner);
  const foundUser = await Listing.find({ owner: owner });
  console.log(foundUser);
  res.send(JSON.stringify(foundUser));
});

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
});

module.exports = router;
