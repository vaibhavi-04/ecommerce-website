import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import HomeProductCard from '../components/product/HomeProductCard';
// import jewel_img from '../assets/images/women\'s/accessories/w-jewel.jpg'
// import bag_img from '../assets/images/women\'s/bags/close-up-knitted-bag-still-life.jpg'
// import shoes_img from '../assets/images/women\'s/shoes/w-shoes.jpg'
// import img1 from '../assets/images/women\'s/shoes/w-shoes.jpg'
const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Product 1',
      image: "assets/images/close-up-knitted-bag-still-life.jpg",
      price: '$100',
    },
    {
      id: 2,
      name: 'Product 2',
      image: "assets/images/w-jewel.jpg",
      price: '$150',
    },
    {
      id: 3,
      name: 'Product 3',
      image: "assets/images/w-shoes.jpg",
      price: '$200',
    },
  ];

  return (
    <div>
     
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Featured Products */}
      <div className="container mx-auto py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <HomeProductCard key={product.id} product={product}></HomeProductCard>          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
