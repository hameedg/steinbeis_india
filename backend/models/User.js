const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, "username must be unique"],
    required: [true, "Please enter your name"],
  },
  age: {
    type: Number,
    required: [true, "Please enter your age"],
  },
  gender: String,
  dob: Date,
  bankBalance: {
    type: Number,
  },
  myAssets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
