const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  categories: [{ type: String, enum: ['men', 'women', 'clothing', 'bags', 'footwear'], required: true }],//an array
  image: { type: String, required: true }, // You can store image URLs or use a service like AWS S3
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
