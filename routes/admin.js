const express = require("express");
const path = require("path");

const productsController = require("../controllers/products")


const router = express.Router();
router.get("/product-create", productsController.addProduct);
router.get("/product-create", productsController.addProduct);
router.get("/products", productsController.addProduct)

router.post("/product",productsController.productCreate);

exports.routes = router;
