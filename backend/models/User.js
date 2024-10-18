const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  wishlist: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
  cart: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
});

module.exports = mongoose.model('User', UserSchema); //mongodb collection name -> users // mongoose auto pluralizes user 

