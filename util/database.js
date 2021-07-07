const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://bilal:bilal2024@cluster0.c3huv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
    .then((client) => {
      _db = client.db();
      // console.log("Connected", client);
      callback();
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "NO DATABASE FOUND";
};

// module.exports = mongoConnect;
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
