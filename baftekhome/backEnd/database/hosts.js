const mongoose = require("mongoose");
const hostSchema = mongoose.Schema({
  firstNameHost: String,
  lastNameHost: String,
  userNameHost: String,
  emailHost: {
    unique: true,
    type: String,
    required: true
  },
  passwordHost: String,
  adressHost: String,
  rate: String,
  imageHost: String
});

const Host = mongoose.model("hosts", hostSchema);
module.exports = Host;
