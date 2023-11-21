const express = require("express");
const path = require("path")

const routes = express.Router();
const adminData= require("./admin")
routes.get("/", (req, res, next) => {
  console.log("Products : ",adminData.products)
  res.render("shop",{"prods":adminData.products,"title":"Shop"});
});

module.exports = routes

