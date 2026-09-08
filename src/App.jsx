import React from 'react';
import { Header } from './components/layout/Header';
import { AppRoutes } from './routes/AppRoutes';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-50">
      <Header />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        © {new Date().getFullYear()} Premium Lifestyle E-Commerce. All rights reserved.
      </footer>
    </div>
  );
}