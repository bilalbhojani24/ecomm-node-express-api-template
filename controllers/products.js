const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    formCSS: true,
    productCSS: true,
  });
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  //   products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      docTitle: "Shop",
      path: "/",
      pageTitle: "Product",
      hadProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
  // To serve any file for example HTML
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  // To serve pug temp[late use render()
};
