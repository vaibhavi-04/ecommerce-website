const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Route to add a new product
router.post('/add', async (req, res) => {
  const { name, description, price, category, image } = req.body;
  try {
    const newProduct = new Product({ name, description, price, category, image });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add product' });
  }
});

// Route to get products by category
router.get('/category/:category', async (req, res) => {
  try {
    const products = await Product.find({ categories: req.params.category });
    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found in this category' });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Route to update a product by ID
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;           //or const id = req.params.id;
  const updateData = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true }); //new: true -> to return the product after update ...by default it returns product without changes
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Route to delete a product by ID
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;   //destructuring

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});



module.exports = router;



