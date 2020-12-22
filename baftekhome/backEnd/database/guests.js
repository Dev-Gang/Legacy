var mongoose = require("mongoose");

const guestSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  userName: String,
  email: {
    unique: true,
    type: String,
    required: true
  },
  password: String,
  rate: String,
  image: String
});

var guests = mongoose.model("guests", guestSchema);
module.exports = guests;
