const express = require("express");
const {
  purchaseAsset,
  createAsset,
  getAllAssets,
  myAssets,
} = require("../controllers/assets");
const router = express.Router();

router.route("/create").post(createAsset);
router.route("/purchase").post(purchaseAsset);
router.route("/assets").get(getAllAssets);
router.route("/myassets").get(myAssets);

module.exports = router;
