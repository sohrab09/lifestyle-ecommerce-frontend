import React from 'react';
import { Header } from './components/layout/Header';
import { AppRoutes } from './routes/AppRoutes';
import { Footer } from './components/layout/Footer';
import { AppDownloadBanner } from './components/common/AppDownloadBanner';
import { useSelector } from 'react-redux';
import { CartDrawer } from './components/cart/CartDrawer';

export default function App() {
  const { isCartDrawerOpen } = useSelector((state) => state.ui);
  return (
    <div className="min-h-screen flex flex-col bg-surface-50">
      <Header />
      <main className="flex-1">
        <AppRoutes />
        {isCartDrawerOpen && <CartDrawer />}
      </main>
      <AppDownloadBanner />
      <Footer />
    </div>
  );
}