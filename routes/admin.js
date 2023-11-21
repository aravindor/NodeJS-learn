const express = require("express");
const path = require("path");

const products = [];

const router = express.Router();
router.get("/product-create", (req, res, next) => {
  res.render("add-product");
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  products.push(req.body);
  res.redirect("/admin/product-create");
});

exports.routes = router;
exports.products = products;
