import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { Cart } from '../pages/Cart';
import { Login } from '../pages/Login';
import { Checkout } from '../pages/Checkout';
import { ProductDetails } from '../pages/ProductDetails';
import { Wishlist } from '../pages/Wishlist';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="*" element={<div className="p-8 text-center">404 Not Found</div>} />
        </Routes>
    );
};