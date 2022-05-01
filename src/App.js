import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { Routes, Route } from "react-router-dom"
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="products" element={<Products />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
