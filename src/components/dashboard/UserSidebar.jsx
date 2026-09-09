import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, ShoppingBag, Heart, MapPin, LogOut } from 'lucide-react';

export const UserSidebar = () => {
    const location = useLocation();

    const menuItems = [
        { name: 'আমার প্রোফাইল', path: '/dashboard', icon: User },
        { name: 'আমার অর্ডারসমুহ', path: '/dashboard/orders', icon: ShoppingBag },
        { name: 'উইশলিস্ট', path: '/wishlist', icon: Heart },
        { name: 'ডেলিভারি ঠিকানা', path: '/dashboard/address', icon: MapPin },
    ];

    return (
        <div className="bg-white rounded-xl border border-surface-200 p-4 shadow-sm space-y-2">
            <div className="p-3 bg-surface-50 rounded-lg mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-900 text-white font-bold rounded-full flex items-center justify-center">
                    উ
                </div>
                <div>
                    <h3 className="text-sm font-bold text-slate-800">ইউজার নেম</h3>
                    <p className="text-xs text-slate-500">user@example.com</p>
                </div>
            </div>

            <nav className="space-y-1">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                                ? 'bg-primary-900 text-white'
                                : 'text-slate-700 hover:bg-surface-100'
                                }`}
                        >
                            <Icon className="w-4 h-4" />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}

                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
                    <LogOut className="w-4 h-4" />
                    <span>লগআউট</span>
                </button>
            </nav>
        </div>
    );
};