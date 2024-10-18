import React, { useState } from 'react';
import axios from 'axios';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Toggle wishlist
  const toggleWishlist = async () => {
    try {
      const token = localStorage.getItem('token'); // Get the auth token from localStorage
      await axios.put(
        `http://localhost:5000/api/profile/wishlist/${product._id}`,
        {},
        { headers: { Authorization: token } } // Pass the token in headers
      );
      setIsWishlisted(!isWishlisted); // Toggle the wishlist state
    } catch (err) {
      console.error('Error updating wishlist: ', err);
    }
  };


  const handleWishList = async() =>{
    try{
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/profile/wishlist/${product._id}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('product added to wishlist!!');
    }catch(error){
      console.error('Error adding to wishlist: ', error);
    }
  };

  const handleAddToCart = async() => {
    try{
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/profile/cart/${product._id}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Product added to cart');
    }catch(error){
      console.error('Error adding to cart: ', error );
    }
  };


  return (
    <div className="relative border rounded-lg shadow-lg p-6 transition-transform duration-200 hover:scale-105 mx-4 my-4"> {/* Added margin for spacing */}
      {/* Wishlist Icon */}
      <div
        className="absolute top-2 right-2 cursor-pointer text-2xl" // Increased the size of the heart icon
        onClick={toggleWishlist}
      >
        {isWishlisted ? (
          <i className="fas fa-heart text-red-500"></i> // Filled heart for wishlisted
        ) : (
          <i className="far fa-heart text-gray-500"></i> // Empty heart for non-wishlisted
        )}
      </div>

      {/* Product Image */}
      <img
        src={`http://localhost:5000${product.image}`}
        alt={product.name}
        className="w-80 h-80 object-cover rounded-t-lg mb-4" // Increased height and added margin-bottom
      />

      {/* Product Name */}
      <h3 className="text-lg font-semibold">{product.name}</h3>

      {/* Product Description */}
      <p className="text-sm text-gray-600 mt-2">{product.description}</p>

      {/* Product Price */}
      <p className="text-lg font-bold text-gray-800 mt-2">{`$${product.price}`}</p>

{/* wishlist button */}
<button
        className="bg-gray-800 text-white py-2 px-4 rounded mt-4 w-full shadow-lg hover:bg-gray-700 transition duration-300 transform hover:scale-105"
        onClick={handleWishList} // Call addToCart when the button is clicked
      >
        Add to Wishlist
      </button>

      {/* Add to Cart Button */}
      <button
        className="bg-gray-800 text-white py-2 px-4 rounded mt-4 w-full shadow-lg hover:bg-gray-700 transition duration-300 transform hover:scale-105"
        onClick={handleAddToCart} // Call addToCart when the button is clicked
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
