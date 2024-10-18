import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import Login from './components/auth/Login';
// import Signup from './components/auth/Signup';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import Modal from './experiments/Modal.js';
import ProductList from './components/product/ProductList.js';
import { AuthProvider, useAuth } from './components/auth/AuthContext.js';
import UserProfile from './components/common/UserProfile.js';
import Navbar from './components/common/Navbar.js';

const App = () => {
  return (
    <AuthProvider>
    <Router>
    <Navbar />
        <Routes>
        <Route exact path="/" element={<HomePage/>} />
        {/* <Route  exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} /> */}
        {/* <Route exact path='/modal' element={<Modal />} /> */}
        <Route path="/product/:category" element={<ProductList />} />
        <Route exact path='/profile' element={<UserProfile />} />
        </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;
