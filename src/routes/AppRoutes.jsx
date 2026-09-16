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
import { MyOrders } from '../pages/dashboard/MyOrders';
import { AddressManagement } from '../pages/dashboard/AddressManagement';

// Admin Dashboard Pages
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage';
import { CategoryAddPage } from '../pages/admin/CategoryAddPage';
import { ProductAddPage } from '../pages/admin/ProductAddPage';
import { OrderListPage } from '../pages/admin/OrderListPage';
import { SalesReportPage } from '../pages/admin/SalesReportPage';
import { StockManagementPage } from '../pages/admin/StockManagementPage';
import { AdvancedReportsPage } from '../pages/admin/AdvancedReportsPage';
import { UserManagementPage } from '../pages/admin/UserManagementPage';

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

            {/* Customer Dashboard Routes */}
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/dashboard/orders" element={<MyOrders />} />
            <Route path="/dashboard/address" element={<AddressManagement />} />

            {/* Admin Dashboard Routes */}
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="/admin/categories" element={<CategoryAddPage />} />
            <Route path="/admin/products/add" element={<ProductAddPage />} />
            <Route path="/admin/orders" element={<OrderListPage />} />
            <Route path="/admin/sales" element={<SalesReportPage />} />
            <Route path="/admin/stock" element={<StockManagementPage />} />
            <Route path="/admin/reports" element={<AdvancedReportsPage />} />
            <Route path="/admin/users" element={<UserManagementPage />} />

            {/* 404 Route */}
            <Route path="*" element={<div className="p-8 text-center font-bold text-slate-600">404 Not Found</div>} />
        </Routes>
    );
};