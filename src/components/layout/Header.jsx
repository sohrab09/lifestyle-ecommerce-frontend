import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Search, ShoppingBag, Heart, User, Menu, Smartphone, ChevronDown } from 'lucide-react';
import { toggleMobileMenu, toggleCartDrawer } from '../../store/slices/uiSlice';
import { selectCartTotalCount } from '../../store/slices/cartSlice';

const NAV_ITEMS = [
    { name: 'হোম', path: '/' },
    { name: 'বই', path: '/products?category=books', hasDropdown: true },
    { name: 'বিষয়', path: '/categories' },
    { name: 'লেখক', path: '/authors' },
    { name: 'আজকের অফার', path: '/products?offer=true' },
    { name: 'ফুড', path: '/products?category=food' },
    { name: 'লাইফস্টাইল', path: '/products?category=lifestyle' },
    { name: 'গ্যাজেট', path: '/products?category=gadget' },
    { name: 'স্টেশনারী', path: '/products?category=stationery' },
];

export const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartCount = useSelector(selectCartTotalCount);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <header className="w-full bg-white border-b border-surface-200 sticky top-0 z-40">
            {/* Top Bar Announcement */}
            <div className="bg-surface-100 border-b border-surface-200 text-xs text-slate-600 py-1.5 px-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Smartphone className="w-3.5 h-3.5 text-primary-900" />
                        <span>আমাদের মোবাইল অ্যাপ ডাউনলোড করুন</span>
                    </div>
                    <a
                        href="#"
                        className="bg-primary-900 hover:bg-primary-800 text-white text-[11px] font-medium px-2.5 py-0.5 rounded shadow-sm transition-colors"
                    >
                        Google Play
                    </a>
                </div>
            </div>

            {/* Main Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex items-center justify-between gap-4 md:gap-8">

                    {/* Mobile Hamburger Toggle */}
                    <button
                        onClick={() => dispatch(toggleMobileMenu())}
                        className="p-1.5 text-slate-700 hover:text-primary-900 md:hidden"
                        aria-label="Toggle Menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-1 flex-shrink-0">
                        <span className="text-2xl font-black tracking-tight text-primary-900">
                            LIFESTYLE<span className="text-accent-500">.</span>
                        </span>
                    </Link>

                    {/* Search Bar - Center */}
                    <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl relative">
                        <input
                            type="text"
                            placeholder="পণ্য বা ক্যাটাগরি অনুসন্ধান করুন..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-4 pr-10 py-2 text-sm bg-surface-50 border border-surface-200 rounded-lg focus:outline-none focus:border-primary-900 focus:bg-white transition-all"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-primary-900"
                            aria-label="Search"
                        >
                            <Search className="w-4 h-4" />
                        </button>
                    </form>

                    {/* Account & Cart Actions */}
                    <div className="flex items-center gap-4 text-sm">
                        <Link to="/wishlist" className="hidden lg:flex items-center gap-1.5 text-slate-700 hover:text-primary-900">
                            <Heart className="w-5 h-5" />
                            <span>উইশলিস্ট</span>
                        </Link>

                        <button
                            onClick={() => dispatch(toggleCartDrawer())}
                            className="flex items-center gap-1.5 text-slate-700 hover:text-primary-900 relative"
                        >
                            <div className="relative">
                                <ShoppingBag className="w-5 h-5" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1.5 -right-2 bg-accent-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                            <span className="hidden sm:inline">শপিং ব্যাগ</span>
                        </button>

                        <Link to="/login" className="flex items-center gap-1.5 text-slate-700 hover:text-primary-900">
                            <User className="w-5 h-5" />
                            <span className="hidden sm:inline">সাইন ইন</span>
                        </Link>
                    </div>
                </div>

                {/* Mobile Search Input */}
                <div className="mt-2 md:hidden">
                    <form onSubmit={handleSearch} className="relative w-full">
                        <input
                            type="text"
                            placeholder="অনুসন্ধান করুন..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-3 pr-9 py-1.5 text-sm bg-surface-50 border border-surface-200 rounded-md focus:outline-none focus:border-primary-900"
                        />
                        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">
                            <Search className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Navigation Links Bar */}
            <nav className="hidden md:block border-t border-surface-100 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ul className="flex items-center gap-6 text-sm font-medium text-slate-700 py-2.5 overflow-x-auto no-scrollbar">
                        {NAV_ITEMS.map((item, index) => (
                            <li key={index} className="flex-shrink-0">
                                <Link
                                    to={item.path}
                                    className="flex items-center gap-1 hover:text-primary-900 transition-colors"
                                >
                                    {item.name}
                                    {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};