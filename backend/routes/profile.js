const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middlewares/authMiddleware');
const mongoose = require('mongoose');


//add to wishlist
router.put('/wishlist/:productId', authMiddleware, async(req, res) =>{
  try{
    // const {userId} = req;
    const {productId} = req.params;

    const user = await User.findById(req.user);
    if(!user.wishlist.includes(productId)){
      user.wishlist.push(productId);
      await user.save();
    }
    res.status(200).json(user.wishlist);
  }catch(err){
    res.status(500).json({message: 'Error adding to wishlist'});
  }
});

//add to cart
router.put('/cart/:productId', authMiddleware, async(req, res) =>{
  try{
    // const {userId} = req;
    const {productId} = req.params;

    const user = await User.findById(req.user);
    if(!user.cart.includes(productId)){
      user.cart.push(productId);
      await user.save();
    }
    res.status(200).json(user.cart);
  }catch (error){
    res.status(500).json({message: 'Error adding to cart'});
  }
});



// get user profile (wishlist and cart)
router.get('/user', authMiddleware, async (req, res) => {
  try {
    console.log('User ID:', req.user); // req.user is the user ID
    const user = await User.findById(req.user).populate('wishlist').populate('cart');
    
    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('User fetched from DB in profile in backend:', user);
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Error fetching profile' });
  }
});

router.delete('/removeFromWishlist/:productId', authMiddleware, async (req, res) => {
  try {
    console.log('Received request to remove product:', req.params.productId);
    console.log('User ID:', req.user);
    
    const { productId } = req.params;
    const user = await User.findById(req.user);
    
    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('User wishlist before removal:', user.wishlist);
    
    user.wishlist = user.wishlist.filter(item => item.toString() !== productId);
    await user.save();

    console.log('User wishlist after removal:', user.wishlist);
    
    res.status(200).json(user.wishlist);
  } catch (err) {
    console.error('Error in removeFromWishlist:', err);
    res.status(500).json({ message: 'Error removing from wishlist' });
  }
});



//remove from cart
router.delete('/removeFromCart/:productId', authMiddleware, async (req, res) => {
  try {
  
    
    const { productId } = req.params;
    const user = await User.findById(req.user);
    
    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    // console.log('User wishlist before removal:', user.wishlist);
    
    user.cart = user.cart.filter(item => item.toString() !== productId);
    await user.save();

    // console.log('User cart after removal:', user.cart);
    
    res.status(200).json(user.wishlist);
  } catch (err) {
    console.error('Error in removeFromCart:', err);
    res.status(500).json({ message: 'Error removing from cart' });
  }
});



module.exports = router;
