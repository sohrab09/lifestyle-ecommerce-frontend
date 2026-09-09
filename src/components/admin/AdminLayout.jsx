import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard, ShoppingBag, Package, Users,
    Tag, Settings, LogOut, Menu, X, ExternalLink
} from 'lucide-react';
import { Logo } from '../common/Logo';

export const AdminLayout = ({ children }) => {
    const location = useLocation();
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const adminMenu = [
        { name: 'ওভারভিউ', path: '/admin', icon: LayoutDashboard },
        { name: 'অর্ডার সমুহ', path: '/admin/orders', icon: ShoppingBag },
        { name: 'প্রোডাক্ট সমুহ', path: '/admin/products', icon: Package },
        { name: 'কাস্টমারস', path: '/admin/customers', icon: Users },
        { name: 'কুপন ও অফার', path: '/admin/coupons', icon: Tag },
        { name: 'সেটিংস', path: '/admin/settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">

            {/* --- Mobile Top Header --- */}
            <div className="md:hidden bg-slate-900 text-white p-4 flex items-center justify-between sticky top-0 z-30 shadow-md">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                        className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
                        aria-label="Toggle Navigation"
                    >
                        {isMobileSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                    <span className="font-bold text-base">অ্যাডমিন প্যানেল</span>
                </div>
                <Link
                    to="/"
                    target="_blank"
                    className="text-xs text-slate-300 flex items-center gap-1 bg-slate-800 px-2.5 py-1.5 rounded-md hover:text-white"
                >
                    <span>স্টোর দেখুন</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                </Link>
            </div>

            {/* --- Mobile Sidebar Overlay --- */}
            {isMobileSidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsMobileSidebarOpen(false)}
                />
            )}

            {/* --- Admin Sidebar (Desktop & Mobile Slide-out) --- */}
            <aside
                className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
                    }`}
            >
                <div>
                    {/* Logo & Header Title */}
                    <div className="p-5 border-b border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Logo size="sm" showText={false} />
                            <div>
                                <h1 className="text-base font-bold text-white leading-none">অ্যাডমিন প্যানেল</h1>
                                <p className="text-[10px] text-slate-400 mt-1">লাইফস্টাইল ই-কমার্স</p>
                            </div>
                        </div>

                        {/* Close button for mobile */}
                        <button
                            onClick={() => setIsMobileSidebarOpen(false)}
                            className="md:hidden text-slate-400 hover:text-white"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Nav Items */}
                    <nav className="p-4 space-y-1">
                        {adminMenu.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMobileSidebarOpen(false)}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                                        ? 'bg-emerald-600 text-white'
                                        : 'hover:bg-slate-800 hover:text-white'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Sidebar Footer */}
                <div className="p-4 border-t border-slate-800 space-y-2">
                    <Link
                        to="/"
                        target="_blank"
                        className="hidden md:flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-400 bg-slate-800/50 hover:bg-slate-800 hover:text-white rounded-lg transition-colors"
                    >
                        <span>লাইভ স্টোর দেখুন</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                    </Link>

                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-slate-800 transition-colors">
                        <LogOut className="w-4 h-4" />
                        <span>লগআউট</span>
                    </button>
                </div>
            </aside>

            {/* --- Main Admin Content --- */}
            <main className="flex-1 p-4 md:p-6 overflow-y-auto">
                {children}
            </main>

        </div>
    );
};