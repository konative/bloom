const mongoose = require("mongoose");
const { getMaxListeners } = require("../businessModel.js");
const mongoURL = "mongodb://localhost:27017/bloom";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const Business = require("../businessModel.js");

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
      phoneNum: `${seedBusinesses[seed].phoneNum}`,
      address: `${seedBusinesses[seed].address}`,
      owner: `${seedBusinesses[seed].owner}`
    });
    await tempSeed.save();
  }
};

seedBusinesses = [
  {
    name: "John's Fish & Chips",
    description: "Cornerstore restaraunt with World Class Fish & Chips",
    phoneNum: "1231231234",
    address: "123 Abdo Ave",
    owner: "johnfc@gmail.com",
  },
  {
    name: "Sally's Home Bakery",
    description: "Cakes and Pastries made to order from a home-based bakery",
    phoneNum: "1231231235",
    address: "123 Bruno St",
    owner: "sallyhb@gmail.com",
  },
  {
    name: "Deepika's Indian Sweets",
    description: "Most amazing Baked Sweets and Desserts for all Occasions",
    phoneNum: "1231231236",
    address: "123 Daid Rd",
    owner: "deepikais@gmail.com",
  },
];

//Seed Database and Close Connection
seedDB().then(() => {
  mongoose.connection.close();
});
