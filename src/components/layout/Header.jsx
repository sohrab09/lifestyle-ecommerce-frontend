import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Search, ShoppingBag, Heart, User, Menu, ChevronDown, X } from 'lucide-react';
import { toggleCartDrawer } from '../../store/slices/uiSlice';
import { selectCartTotalCount } from '../../store/slices/cartSlice';
import { Logo } from '../common/Logo';

const NAV_ITEMS = [
    { name: 'হোম', path: '/' },
    { name: 'বই', path: '/products?category=books', hasDropdown: true },
    { name: 'বিষয়', path: '/categories' },
    { name: 'লেখক', path: '/authors' },
    { name: 'প্রকাশক', path: '/publishers' },
    { name: 'আজকের অফার', path: '/products?offer=true' },
    { name: 'প্রি-অর্ডার', path: '/pre-order' },
    { name: 'ফুড', path: '/products?category=food' },
    { name: 'লাইফস্টাইল', path: '/products?category=lifestyle' },
    { name: 'গ্যাজেট', path: '/products?category=gadget' },
    { name: 'স্টেশনারী', path: '/products?category=stationery' },
    { name: 'কর্পোরেট', path: '/corporate' },
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
            setMobileMenuOpen(false);
        }
    };

    return (
        <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-40 font-sans">
            {/* Top Bar Announcement */}
            <div className="bg-white border-b border-gray-100 text-xs text-gray-700 py-1 px-4">
                <div className="max-w-300 mx-auto flex items-center justify-center gap-3">
                    <div className="flex items-center gap-2 font-medium">
                        <div className="w-5 h-5 rounded-full bg-[#dc2626] text-white flex items-center justify-center text-[10px] font-bold">
                            W
                        </div>
                        <span className="text-gray-800">Wafilife অ্যাপ ডাউনলোড করুন</span>
                    </div>
                    <a
                        href="#"
                        className="bg-[#e53935] hover:bg-red-700 text-white text-[11px] font-medium px-3 py-0.5 rounded-full shadow-sm transition-colors flex items-center gap-1"
                    >
                        <span>▶</span> Google Play
                    </a>
                </div>
            </div>

            <div className="bg-[#f8f9fa] py-3.5">
                <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-40">
                    <div className="flex items-center justify-between gap-4 md:gap-8">

                        {/* Mobile Toggle & Logo */}
                        <div className="flex items-center gap-3 shrink-0">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="lg:hidden p-1.5 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors"
                                aria-label="Toggle Menu"
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>

                            <Logo size="md" showText={true} />
                        </div>

                        {/* Search Bar - Desktop */}
                        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl relative">
                            <input
                                type="text"
                                placeholder="বইয়ের নাম ও লেখক দিয়ে অনুসন্ধান করুন"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-4 pr-11 py-2 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:border-red-500 text-gray-700 placeholder-gray-400 transition-all shadow-sm"
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-600 transition-colors"
                                aria-label="Search"
                            >
                                <Search className="w-4 h-4 stroke-2" />
                            </button>
                        </form>

                        {/* Account & Cart Actions */}
                        <div className="flex items-center gap-4 lg:gap-6 text-xs text-gray-600 shrink-0">
                            <Link to="/wishlist" className="hidden sm:flex items-center gap-1.5 hover:text-red-600 transition-colors">
                                <Heart className="w-4 h-4 stroke-[1.8]" />
                                <span>উইশলিস্ট</span>
                            </Link>

                            <button
                                onClick={() => dispatch(toggleCartDrawer())}
                                className="flex items-center gap-1.5 hover:text-red-600 transition-colors relative"
                            >
                                <div className="relative">
                                    <ShoppingBag className="w-4 h-4 stroke-[1.8]" />
                                    {cartCount > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-[#e53935] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                            {cartCount}
                                        </span>
                                    )}
                                </div>
                                <span className="hidden sm:inline">শপিং ব্যাগ</span>
                            </button>

                            <Link to="/login" className="flex items-center gap-1.5 hover:text-red-600 transition-colors">
                                <User className="w-4 h-4 stroke-[1.8]" />
                                <span className="hidden sm:inline">Account</span>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Search Input */}
                    <div className="mt-3 md:hidden">
                        <form onSubmit={handleSearch} className="relative w-full">
                            <input
                                type="text"
                                placeholder="বইয়ের নাম ও লেখক দিয়ে অনুসন্ধান করুন"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-3 pr-9 py-2 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:border-red-500 text-gray-700 placeholder-gray-400"
                            />
                            <button type="submit" className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">
                                <Search className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Desktop Navigation Links (সেন্টারে রেন্ডার করা হয়েছে এবং স্লাইডারের সঙ্গে প্রস্থ মিলানো হয়েছে) */}
            <nav className="hidden lg:block border-t border-gray-100 bg-white">
                <div className="max-w-300 mx-auto px-4 sm:px-6">
                    <ul className="flex items-center justify-center gap-4 xl:gap-6 text-[13px] font-medium text-gray-700 py-2.5 overflow-x-auto no-scrollbar">
                        {NAV_ITEMS.map((item, index) => (
                            <li key={index} className="shrink-0">
                                <Link
                                    to={item.path}
                                    className="flex items-center gap-1 hover:text-red-600 transition-colors"
                                >
                                    {item.name}
                                    {item.hasDropdown && <ChevronDown className="w-3 h-3 text-gray-400" />}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 flex">
                    <div
                        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    <div className="relative w-4/5 max-w-xs bg-white h-full shadow-xl flex flex-col z-10">
                        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                            <Logo size="sm" showText={true} />
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-1 rounded-md text-gray-500 hover:bg-gray-100"
                                aria-label="Close menu"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
                            {NAV_ITEMS.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                                >
                                    <span>{item.name}</span>
                                    {item.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
                                </Link>
                            ))}

                            <hr className="my-3 border-gray-100" />

                            <Link
                                to="/wishlist"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 py-2 px-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                <Heart className="w-4 h-4 text-gray-500" />
                                <span>উইশলিস্ট</span>
                            </Link>
                            <Link
                                to="/login"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 py-2 px-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                <User className="w-4 h-4 text-gray-500" />
                                <span>Account</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};