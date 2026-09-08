import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<div className="p-8 text-center">Product Detail Page (TBD)</div>} />
            <Route path="/cart" element={<div className="p-8 text-center">Cart Page (TBD)</div>} />
            <Route path="/login" element={<div className="p-8 text-center">Login Page (TBD)</div>} />
            <Route path="*" element={<div className="p-8 text-center">404 Not Found</div>} />
        </Routes>
    );
};