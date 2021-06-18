const fs = require("fs");
const path = require("path");
// const products = [];
const locationOfFile = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(locationOfFile, (err, fileContent) => {
    if (err) {
      // return [];
      return cb([]);
    }
    //   return JSON.parse(fileContent);
    return cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(_title, imageUrl, description, price) {
    this.title = _title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(locationOfFile, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
    // return products;
  }
};
