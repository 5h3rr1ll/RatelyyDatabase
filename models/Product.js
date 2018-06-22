// Product.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Product
var Product = new Schema({
  productName: {
    type: String
  },
  productGTIN: {
    type: String
  },
  productProducer: {
    type: String
  },
  productConcern: {
    type: String
  },
  productPictureURL: {
    type: String
  }
},{
  collection: "products"
});

module.exports = mongoose.model("Product", Product);
