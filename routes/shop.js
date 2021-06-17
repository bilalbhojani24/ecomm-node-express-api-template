const express = require("express");
const path = require("path");
const { getProducts } = require("../controllers/products"); // alternate way
const router = express.Router();

const rootDir = require("../util/path");

const adminData = require("./admin");

router.get("/", getProducts);

module.exports = router;
