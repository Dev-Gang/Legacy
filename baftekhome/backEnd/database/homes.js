const mongoose = require("mongoose");

const homeSchema = mongoose.Schema({
  _id: { type: String },
  firstName: String,
  lastName: String,
  image: String,
  location: String,
  description: String,
  price: Number,
  contactInformation: String,
  category: String
});

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;
