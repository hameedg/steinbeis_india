const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the asset name"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantities are must to display stocks"],
  },
  cost: {
    type: Number,
    required: [true, "Please give cost of the asset"],
  },
});

module.exports = mongoose.model("Asset", assetSchema);
