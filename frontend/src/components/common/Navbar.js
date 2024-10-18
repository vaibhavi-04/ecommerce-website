
import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { HiOutlineShoppingBag } from "react-icons/hi";
import AuthModal from '../auth/AuthModal'; // Import the AuthModal component
import { AuthContext } from '../auth/AuthContext'; // Import AuthContext to track login status

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext); // Get the login status from context
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Navbar component mounted');
  }, []);
  

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    console.log('logout button clicked!!');
    logout();
    navigate('/');
  }

  return (
    <nav className="bg-light">
      
      <div className="container mx-auto py-8 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="/assets/images/logo_1.png" alt="Brand Logo" className="h-12" />
          </Link>
        </div>

        {/* Tagline */}
        <div className="text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Pacifico', cursive" }}>
            Embrace the Finer Things
          </h1>
        </div>

        {/* Include AuthModal */}
        <AuthModal
          showLogin={showLogin}
          showSignup={showSignup}
          setShowLogin={setShowLogin}
          setShowSignup={setShowSignup}
        />

        {/* Icons and Auth Links */}
        <div className="flex items-center space-x-6">
          <Link to="/wishlist">
            <FaRegHeart className="text-2xl" />
          </Link>
          <Link to="/cart">
            <HiOutlineShoppingBag className="text-2xl" />
          </Link>

           {/* Conditionally render "View Profile" or "Login/Signup" based on authentication status */}
          {isLoggedIn ? (
            <>
            <Link to="/profile" className="text-lg hover:underline">
              View Profile
            </Link>
            <button onClick={handleLogout} className='text-lg hover:underline'>Logout</button>
            </>
          ) : (
            <>
              <button onClick={handleLoginClick} className="text-lg hover:underline">
                Login
              </button>
              <button onClick={handleSignupClick} className="text-lg hover:underline">
                Signup
              </button>
            </>
          )}
        </div>
      </div>

      {/* Navigation Links and Search Bar */}
      <div className="bg-gray-200 py-2">
        <div className="ml-10 container mx-auto flex justify-between items-center space-x-6">
          {/* Navigation Links */}
          <div className="flex space-x-10">
            <Link to="/product/men" className="hover:underline">Men</Link>
            <Link to="/product/women" className="hover:underline">Women</Link>
            <Link to="/product/accessories" className="hover:underline">Accessories</Link>
            <Link to="/product/clothing" className="hover:underline">Clothing</Link>
            <Link to="/product/bags" className="hover:underline">Bags</Link>        
            <Link to="/product/footwear" className="hover:underline">Footwear</Link>
            <Link to="/product/offers" className="hover:underline">Offers</Link>
            <Link to="/product/newArrivals" className="hover:underline">New Arrivals</Link>
          </div>

          {/* Search Bar */}
          <div>
            <input 
              type="text" 
              placeholder="Search..." 
              className="px-4 py-2 border border-gray-300 rounded-lg w-64 mr-4"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
