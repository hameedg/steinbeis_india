const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config({ path: "config/config.env" });

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes

const userRoute = require("./Routes/userRoutes");
const assetRoute = require("./Routes/assetRoute");
// using routes
app.use("/api/v1", userRoute);
app.use("/api/v1", assetRoute);

module.exports = app;
