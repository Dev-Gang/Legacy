const mongoose = require("mongoose");

const imagesSchema = mongoose.Schema({
  _id: { type: String },
  homeID: String,
  image1: String,
  image2: String,
  image3: String
});

const Images = mongoose.model("Images", imagesSchema);

module.exports = Images;
