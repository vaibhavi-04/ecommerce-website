import React from 'react';
import axios from 'axios';

const RemoveFromWishlist = ({ product, onRemove }) => {
  // Function to remove the product from the wishlist
  const handleRemoveFromWishlist = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/profile/removeFromWishlist/${product._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Call the callback passed from UserProfile to update the state
      onRemove(product._id);
      alert('removed from wishlist!!');
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  return (
    <div className="relative border rounded-lg shadow-lg p-6 transition-transform duration-200 hover:scale-105 mx-4 my-4">
      {/* Product Image */}
      <img
        src={`http://localhost:5000${product.image}`}
        alt={product.name}
        className="w-60 h-60 object-cover rounded-t-lg mb-4"
      />

      {/* Product Name */}
      <h3 className="text-lg font-semibold">{product.name}</h3>

      {/* Product Description */}
      <p className="text-sm text-gray-600 mt-2">{product.description}</p>

      {/* Product Price */}
      <p className="text-lg font-bold text-gray-800 mt-2">{`$${product.price}`}</p>

      {/* Remove from Wishlist Button */}
      <button
        className="bg-red-500 text-white py-2 px-4 rounded mt-4 w-full shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
        onClick={handleRemoveFromWishlist}
      >
        Remove From Wishlist
      </button>
    </div>
  );
};

export default RemoveFromWishlist;
