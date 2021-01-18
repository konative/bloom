//Schema for a Business Model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const busSchema = new Schema(
  {
    name: String,
    address: String,
    description: String,
  },
  {
    collection: "businesses",
  }
);

module.exports = mongoose.model("Business", busSchema);
