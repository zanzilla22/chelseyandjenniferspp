const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/clothing_store', { useNewUrlParser: true, useUnifiedTopology: true });

// Setup ejs as the template engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Models
const Product = mongoose.model('Product', new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String
}));

// Routes
app.get('/', async (req, res) => {
  const products = await Product.find();
  res.render('index', { products });
});

app.get('/add-product', (req, res) => {
  res.render('add-product');
});

app.post('/add-product', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.redirect('/');
});

// Server
app.listen(3000, () => console.log('Server is running on port 3000'));
