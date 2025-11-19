import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import HomePage from './landing_page/home/HomePage.js';
import Singup from './landing_page/singup/Singup.js';
import AboutPage from './landing_page/about/AboutPage.js';
import ProductsPage from './landing_page/products/ProductsPage.js';
import PricingPage from './landing_page/pricing/PricingPage.js';
import SupportPage from './landing_page/support/SupportPage.js';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Singup" element={<Singup />} />
      <Route path="/AboutPage" element={<AboutPage />} />
      <Route path="/ProductsPage" element={<ProductsPage />} />
      <Route path="/PricingPage" element={<PricingPage />} />
      <Route path="/SupportPage" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
