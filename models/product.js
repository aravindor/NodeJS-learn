const products = [];

const path = require("path");
const fs = require("fs");
const { json } = require("body-parser");
const db = require("../utils/database");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

function getProductsFromFile(cb) {
  fs.readFile(p, (err, fileContent) => {
    let products = [];

    if (!err) {
      products = JSON.parse(fileContent);
    }
    cb(JSON.parse(fileContent));
  });
}
module.exports = class Product {
  constructor(name,price,description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  save() {
    db.execute("INSERT INTO products (name,price,description) VALUES (?,?,?)",[this.name,this.price,this.description])
  }

  static fetchAll(cb) {
    db.execute("SELECT * FROM products")
      .then((result) => {
        cb(result[0]);
      })
      .catch((error) => console.log(error));
  }
};
