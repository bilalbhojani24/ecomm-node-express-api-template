const express = require("express");
const path = require("path");
const {
  getProducts,
  getIndex,
  getCart,
  getCheckout,
  getOrders,
} = require("../controllers/shop"); // alternate way
const router = express.Router();

const rootDir = require("../util/path");

const adminData = require("./admin");

router.get("/", getIndex);

router.get("/products", getProducts);

router.get("/cart", getCart);

router.get("/orders", getOrders);

router.get("/checkout", getCheckout);

module.exports = router;
