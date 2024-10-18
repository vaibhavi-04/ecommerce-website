
import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    // Toggle wishlist status
    setIsWishlisted(!isWishlisted);
    // Optionally handle API request to save wishlist state here
  };

  return (
    <div className="relative border rounded-lg shadow-lg p-4">
      {/* Wishlist Icon */}
      <div
        className="absolute top-2 right-2 cursor-pointer"
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
        src={`${process.env.PUBLIC_URL}/${product.image}`}
        alt={product.name}
        className="w-full h-64 object-cover rounded-t-lg"
      />

      {/* Product Name */}
      <h3 className="text-lg font-semibold mt-4">{product.name}</h3>

      {/* Product Price */}
      <p className="text-lg font-bold text-gray-800">{product.price}</p>

      {/* Add to Cart Button */}
      <button className="btn btn-primary mt-4 w-full">Add to Cart</button>
    </div>
  );
};

export default ProductCard;