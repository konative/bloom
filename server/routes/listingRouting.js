const express = require("express");
const Listing = require("../models/businessModel.js");
const router = express.Router();

//Get homepage **NOT APPLICABLE**
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
        return listing.name.toLowerCase().includes(`${searchTerm}`);
      });
      res.send(filteredArray);
    }
  } catch (error) {
    console.log(error);
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

module.exports = router;
