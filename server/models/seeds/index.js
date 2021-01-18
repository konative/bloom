const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/bloom";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const Business = require("../models/businessModel");

//Connect to local Mongo database
mongoose
  .connect(mongoURL, options)
  .then(() => {
    console.log("Connected to bloom database");
  })
  .catch((err) => {
    console.log("Error could not connect");
    console.log(err);
  });

//Initial Seed Function for Database
const seedDB = async () => {
  await Business.deleteMany({});
  for (let seed in seedBusinesses) {
    console.log(seedBusinesses[seed].name);
    const tempSeed = new Business({
      name: `${seedBusinesses[seed].name}`,
      description: `${seedBusinesses[seed].description}`,
    });
    await tempSeed.save();
  }
};

seedBusinesses = [
  {
    name: "John's Fish & Chips",
    description: "Cornerstore restaraunt with World Class Fish & Chips",
  },
  {
    name: "Sally's Home Bakery",
    description: "Cakes and Pastries made to order from a home-based bakery",
  },
  {
    name: "Deepika's Indian Sweets",
    description: "Most amazing Baked Sweets and Desserts for all Occasions",
  },
];

//Seed Database and Close Connection
seedDB().then(() => {
  mongoose.connection.close();
});
