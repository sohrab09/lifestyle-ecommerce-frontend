import { Routes, Route } from 'react-router-dom';

// Public Pages
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { ProductDetails } from '../pages/ProductDetails';
import { Cart } from '../pages/Cart';
import { Login } from '../pages/Login';
import { Checkout } from '../pages/Checkout';
import { Wishlist } from '../pages/Wishlist';

// Customer Dashboard Pages
import { UserDashboard } from '../pages/dashboard/UserDashboard';

// Admin Dashboard Pages
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage';

export const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />

            {/* Customer Dashboard Route */}
            <Route path="/dashboard" element={<UserDashboard />} />

            {/* Admin Dashboard Route */}
            <Route path="/admin" element={<AdminDashboardPage />} />

            {/* 404 Route */}
            <Route path="*" element={<div className="p-8 text-center">404 Not Found</div>} />
        </Routes>
    );
};