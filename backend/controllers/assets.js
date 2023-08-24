const Asset = require("../models/Asset");
const User = require("../models/User");

exports.createAsset = async (req, res) => {
  try {
    const { name, quantity, cost } = req.body;
    const newAsset = new Asset({ name, quantity, cost });
    await newAsset.save();
    res.status(200).json({
      success: true,
      newAsset,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.purchaseAsset = async (req, res) => {
  try {
    const { username, assetName } = req.body;
    const user = await User.findOne({ name: username });
    const asset = await Asset.findOne({ name: assetName });

    if (!user || !asset) {
      return res.status(400).json({
        success: false,
        message: "User or Asset not found",
      });
    }
    if (user.bankBalance < asset.cost) {
      return res.status(400).json({
        success: false,
        message: "You have insufficient funds to purchase this asset",
      });
    }
    if (asset.quantity === 0) {
      return res.status(400).json({
        success: false,
        message: "out of stock",
      });
    }
    user.myAssets.push(asset._id);
    user.bankBalance -= asset.cost;
    asset.quantity -= 1;

    await user.save();
    await asset.save();

    res.status(200).json({
      success: true,
      message: "You purchase is successful",
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllAssets = async (req, res) => {
  try {
    const assets = await Asset.find({});
    res.status(200).json({
      success: true,
      assets,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.myAssets = async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.findOne({ name });

    console.log(user);
    if (!user) {
      res.status(404).json({
        success: false,
        message: "user not foud",
      });
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
