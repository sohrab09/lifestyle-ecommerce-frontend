import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Search, ShoppingBag, Heart, User, Menu, Smartphone, ChevronDown, X } from 'lucide-react';
import { toggleCartDrawer } from '../../store/slices/uiSlice';
import { selectCartTotalCount } from '../../store/slices/cartSlice';
import { Logo } from '../common/Logo';

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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
            setMobileMenuOpen(false); // সার্চ করার পর মোবাইল মেনু বন্ধ হবে
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

                    {/* Mobile Hamburger Toggle & Logo */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>

                        {/* Circular Logo */}
                        <Logo size="md" showText={true} />
                    </div>

                    {/* Search Bar - Desktop */}
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

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:block border-t border-surface-100 bg-white">
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

            {/* Mobile Menu Drawer (নতুন যুক্ত করা অংশ) */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 flex">
                    {/* Backdrop Overlay */}
                    <div
                        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Drawer Content */}
                    <div className="relative w-4/5 max-w-xs bg-white h-full shadow-xl flex flex-col z-10">
                        {/* Drawer Header */}
                        <div className="p-4 border-b border-surface-200 flex items-center justify-between">
                            <Logo size="sm" showText={true} />
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-1 rounded-md text-slate-500 hover:bg-slate-100"
                                aria-label="Close menu"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Mobile Nav Links List */}
                        <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
                            {NAV_ITEMS.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-surface-100 hover:text-primary-900 transition-colors"
                                >
                                    <span>{item.name}</span>
                                    {item.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
                                </Link>
                            ))}

                            <hr className="my-3 border-surface-200" />

                            {/* Extra Mobile Actions */}
                            <Link
                                to="/wishlist"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-surface-100"
                            >
                                <Heart className="w-4 h-4 text-slate-500" />
                                <span>উইশলিস্ট</span>
                            </Link>
                            <Link
                                to="/login"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-surface-100"
                            >
                                <User className="w-4 h-4 text-slate-500" />
                                <span>সাইন ইন / অ্যাকাউন্ট</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};