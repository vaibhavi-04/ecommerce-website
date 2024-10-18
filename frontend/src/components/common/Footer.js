import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} E-Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
