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

  try {
    const listingData = await Listing.findById(id);
    console.log(listingData);
    res.send(listingData);
  } catch (error) {
    console.log(error.message);
    const listingData = JSON.stringify({ notfound: true });
    res.send(listingData);
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
