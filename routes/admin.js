const express = require("express");
const path = require('path')

const router = express.Router();
router.get("/product-create", (req, res, next) => {
  res.sendFile(path.join(__dirname,'../','views','add-product.html'))
}
)

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/product-create");
});

module.exports = router
