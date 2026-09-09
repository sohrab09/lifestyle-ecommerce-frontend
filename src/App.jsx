import React from 'react';
import { Header } from './components/layout/Header';
import { AppRoutes } from './routes/AppRoutes';
import { Footer } from './components/layout/Footer';
import { AppDownloadBanner } from './components/common/AppDownloadBanner';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-50">
      <Header />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <AppDownloadBanner />
      <Footer />
    </div>
  );
}