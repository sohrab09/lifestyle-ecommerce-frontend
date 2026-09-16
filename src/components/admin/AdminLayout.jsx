import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard, FolderPlus, PackagePlus, ShoppingBag,
    TrendingUp, Boxes, BarChart3, Users, LogOut, ExternalLink, Menu, X, ShieldCheck
} from 'lucide-react';

export const AdminLayout = ({ children }) => {
    const location = useLocation();
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const navItems = [
        { name: 'ড্যাশবোর্ড', path: '/admin', icon: LayoutDashboard },
        { name: 'ক্যাটাগরি এড', path: '/admin/categories', icon: FolderPlus },
        { name: 'প্রোডাক্ট এড', path: '/admin/products/add', icon: PackagePlus },
        { name: 'অর্ডার', path: '/admin/orders', icon: ShoppingBag },
        { name: 'সেলস', path: '/admin/sales', icon: TrendingUp },
        { name: 'স্টক', path: '/admin/stock', icon: Boxes },
        { name: 'রিপোর্ট', path: '/admin/reports', icon: BarChart3 },
        { name: 'ইউজার', path: '/admin/users', icon: Users },
    ];

    return (
        <div className="min-h-screen bg-slate-50/60 py-8 md:py-10 text-slate-800 font-sans relative">
            <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-40">

                {/* Mobile Header Bar (Sticky বাদ দেওয়া হয়েছে) */}
                <div className="md:hidden mb-6 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                            className="p-2 text-slate-700 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                        >
                            {isMobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                        <span className="font-extrabold text-slate-900 text-sm tracking-wide">ADMIN PANEL</span>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 font-bold text-[10px] rounded-full border border-emerald-200">
                        ADMIN
                    </span>
                </div>

                {/* Mobile Sidebar Overlay */}
                {isMobileSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 md:hidden"
                        onClick={() => setIsMobileSidebarOpen(false)}
                    />
                )}

                {/* Main Grid Structure */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Sidebar Area */}
                    <div className={`
            fixed md:relative inset-y-0 left-0 z-50 md:z-0 w-72 md:w-auto bg-white md:bg-transparent p-4 md:p-0
            transform transition-transform duration-300 md:col-span-1
            ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}>
                        <aside className="bg-white rounded-2xl border border-slate-100 p-5 shadow-xl shadow-slate-200/50 space-y-6 md:sticky md:top-8">

                            {/* Admin Info Header */}
                            <div className="relative overflow-hidden p-4 rounded-xl bg-linear-to-br from-slate-900 via-emerald-950 to-slate-900 text-white shadow-lg">
                                <div className="absolute -top-8 -right-8 w-24 h-24 bg-amber-500/20 rounded-full blur-xl pointer-events-none"></div>

                                <div className="relative z-10 flex items-center gap-3.5">
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-linear-to-tr from-amber-400 to-emerald-400 text-slate-900 font-extrabold rounded-full flex items-center justify-center text-lg shadow-md border-2 border-white/20">
                                            A
                                        </div>
                                    </div>

                                    <div className="overflow-hidden">
                                        <div className="flex items-center gap-1.5">
                                            <h3 className="text-sm font-bold text-white truncate">Admin Panel</h3>
                                            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                                        </div>
                                        <p className="text-[11px] text-slate-300 truncate">admin@store.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Menu */}
                            <nav className="space-y-1.5">
                                {navItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = location.pathname === item.path;

                                    return (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            onClick={() => setIsMobileSidebarOpen(false)}
                                            className={`group relative flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition-all duration-300 ${isActive
                                                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 font-bold translate-x-1'
                                                : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-700 hover:translate-x-1'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-amber-300' : 'text-slate-400 group-hover:text-emerald-600'
                                                    }`} />
                                                <span>{item.name}</span>
                                            </div>
                                        </Link>
                                    );
                                })}

                                <div className="pt-3 border-t border-slate-100 space-y-1.5">

                                    <button className="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-all duration-200 group">
                                        <LogOut className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                                        <span>লগআউট</span>
                                    </button>
                                </div>
                            </nav>

                        </aside>
                    </div>

                    {/* Main Content Area */}
                    <div className="md:col-span-3">
                        {children}
                    </div>

                </div>
            </div>
        </div>
    );
};