
const DATABASE_NAME = "Demo-learning";
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Demo_learning', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const express = require('express');
const product = require('./routes/product.route');
const app = express();
const port = 7000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/products', product);
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
app.use(require('./errorhandle'))

// app.use((err,req,res,next) => {
//   res.json({
//     code:500,
//     message:err.m
//   })
// })

app.use('/products/create', function (req, res, next) {
  //console.log('Request Type:', req.method)
//  next(req.method)
  res.send('Product Created successfully')
})
