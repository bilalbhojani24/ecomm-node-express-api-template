const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");

const adminController = require("../controllers/admin");

router.get("/add-product", adminController.getAddProducts);

router.get("/products", adminController.getProducts);

router.post("/add-product", adminController.postAddProduct);

router.post("/edit-product");

module.exports = router;
