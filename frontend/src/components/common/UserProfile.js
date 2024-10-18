import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import RemoveFromWishlist from '../product/RemoveFromWishlist';
import RemoveFromCart from '../product/RemoveFromCart';

const UserProfile = () => {
  console.log('UserProfile component mounted');
  const { user } = useContext(AuthContext);
  console.log('User from context:', user);

  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/profile/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Log the profile data for debugging
        console.log('Profile data:', response.data);

        // Adjust the endpoint based on your backend
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setError('Failed to load profile data');
      }
    };

    if (user) {
      fetchProfile();
    }
  }, [user]); // fetch the profile when user changes

  // Function to update the state when a product is removed from the wishlist
  const handleRemoveFromWishlist = (productId) => {
    setUserProfile({
      ...userProfile,
      wishlist: userProfile.cart.filter((item) => item._id !== productId),
    });
  };

   // Function to update the state when a product is removed from the cart
   const handleRemoveFromCart = (productId) => {
    setUserProfile({
      ...userProfile,
      wishlist: userProfile.wishlist.filter((item) => item._id !== productId),
    });
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!userProfile) {
    return <div>Loading1...</div>; // display loading state
  }

  return (
    <div>
      <h1>Your Profile</h1>
      {userProfile ? (
        <>
          <h2>Username: {userProfile.username}</h2>
          <h2>Email: {userProfile.email}</h2>

          {/* Wishlist */}
          <h2>Wishlist</h2>

<div className="product-list">
            {userProfile.wishlist.length > 0 ? (
              userProfile.wishlist.map((item) => (
                <RemoveFromWishlist
                  key={item._id}
                  product={item}
                  onRemove={handleRemoveFromWishlist} // Pass the onRemove callback
                />
              ))
            ) : (
              <p>No items in wishlist</p>
            )}
          </div>

          {/* Cart */}
          <h2>Cart</h2>

<div className="product-list">
            {userProfile.cart.length > 0 ? (
              userProfile.cart.map((item) => (
                <RemoveFromCart
                  key={item._id}
                  product={item}
                  onRemove={handleRemoveFromCart} // Pass the onRemove callback
                />
              ))
            ) : (
              <p>No items in cart</p>
            )}
          </div>
        </>
      ) : (
        <p>Loading2...</p>
      )}
    </div>
  );
};

export default UserProfile;
