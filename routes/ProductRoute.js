// CourseRoute.js

const express = require('express');
const app = express();
const router = express.Router();

const Product = require('../models/Product');

router.route('/add').post(function (req, res) {
    const product = new Product(req.body);
    product.save()
      .then(product => {
      console.log(product);
      res.status(200).json({'product': 'Product added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save the product into database");
      });
  });

  // Defined get data(index or listing) route
  router.route('/').get(function (req, res) {
    Product.find(function (err, products){
      if(err){
        console.log(err);
      }
      else {
        res.json(products);
      }
    });
  });

  // Defined get specific data by GTIN
  router.route('/:productGTIN').get(function (req, res) {
    Product.find({"productGTIN": req.params.productGTIN}, function(err, product) {
      if(err){
        console.log(err);
      }
        // return next(new Error("Could not find specific product"));
      else {
        res.json(product)
      }
    });
  });

  //  Defined update route
  router.route('/update/:id').post(function (req, res) {
    Product.findById(req.params.id, function(err, product) {
      if (!product)
        return next(new Error('Could not load Document'));
      else {
        product.productName = req.body.productName;
        product.productGTIN = req.body.productGTIN;
        product.productProducer = req.body.productProducer;
        product.productConcern = req.body.productConcern;
        product.productPictureURL = req.body.productPictureURL;

        product.save().then(product => {
            res.json('Successfully Updated');
        })
        .catch(err => {
              res.status(400).send("unable to update the database");
        });
      }
    });
  });

  // Defined delete | remove | destroy route
  router.route('/delete/:id').get(function (req, res) {
    Product.findByIdAndRemove({_id: req.params.id}, function(err, product){
          if(err) res.json(err);
          else res.json('Successfully removed');
      });
  });

module.exports = router;
