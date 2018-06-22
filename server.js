// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const config = require('./db');
const Product = require('./models/Product');
const ProductRoute = require('./routes/ProductRoute');

const PORT = 4000;

mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});

app.use(bodyParser.json());
app.use('/product', ProductRoute);

app.listen(PORT, function(){
    console.log('Your node js server for * ratelyy * is running on PORT:',PORT);
});
