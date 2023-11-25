const Product = require("../models/product");

exports.addProduct = (req, res, next) => {
  res.render("admin/add-product");
};
exports.productCreate = (req, res, next) => {
  console.log(req.body);
  const product = new Product(req.body.name,req.body.price,req.body.description);
  product.save();
  res.redirect("/admin/product-create");
};
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", { prods: products, title: "Shop" });
  });
};
