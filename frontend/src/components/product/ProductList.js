


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import '../../styles/productList.css';

const ProductList = () => {
  const { category } = useParams(); // Extract 'category' from the URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/product/category/${category}`);
        setProducts(res.data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };
    fetchProducts();
  }, [category]);

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default ProductList;
