const getDb = require("../util/database").getDb;
const mongodb = require("mongodb");
class Product {
  constructor(title, price, description, imageUrl, id, userId) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id ? new mongodb.ObjectID(id) : null;
    this.userId = userId;
  }

  save() {
    const db = getDb();
    let dbResp;
    if (this._id) {
      //update
      dbResp = db.collection("products").updateOne(
        {
          _id: this._id,
        },
        {
          $set: this,
        }
      );
    } else {
      dbResp = db.collection("products").insertOne(this);
    }
    return dbResp
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        console.log(products);
        return products;
      })
      .catch((error) => console.log(error));
  }

  static findById(prodId) {
    const db = getDb();
    return db
      .collection("products")
      .find({
        _id: mongodb.ObjectID(prodId),
      })
      .next()
      .then((prod) => {
        // console.log("hbfvhj", prod);
        return prod;
      })
      .catch((error) => console.log(error));
  }

  static deleteById(id) {
    const db = getDb();
    return db
      .collection("products")
      .deleteOne({ _id: new mongodb.ObjectID(id) })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }
}

module.exports = Product;
