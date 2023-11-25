const express = require("express");
const path = require("path");

const routes = express.Router();
const productController = require("../controllers/products");
routes.get("/", productController.getProducts);
routes.get("/cart", productController.getProducts);
routes.get("/product", productController.getProducts);
routes.get("/checkout", productController.getProducts);

module.exports = routes;
