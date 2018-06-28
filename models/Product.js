// Product.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Product
var Product = new Schema({
  name: {
    type: String
  },
  gtin: {
    type: String
  },
  producer: {
    type: String
  },
  concern: {
    type: String
  },
  pictureURL: {
    type: String
  }
},{
  collection: "products"
});

module.exports = mongoose.model("Product", Product);
