const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");

const productController = require("../controllers/products");

router.get("/add-product", productController.getAddProducts);

router.post("/add-product", productController.postAddProduct);

module.exports = router;
