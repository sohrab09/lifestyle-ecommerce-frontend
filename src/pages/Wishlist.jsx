import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, Heart, Star, ArrowRight, ShoppingCart, Sparkles } from 'lucide-react';

export const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            name: 'প্রিমিয়াম প্রাকাকৃতিক আতর - আম্বার আল ওউদ (12ml)',
            slug: 'amber-al-oud-attar',
            price: 1250,
            previousPrice: 1500,
            image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&auto=format&fit=crop&q=80',
            category: 'Fragrance',
            rating: 4.8,
            inStock: true,
        },
        {
            id: 2,
            name: 'হ্যান্ডমেড সরামিক ফ্লাওয়ার ভাস / ফুলদানী',
            slug: 'handmade-ceramic-flower-vase',
            price: 1850,
            previousPrice: 2200,
            image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&auto=format&fit=crop&q=80',
            category: 'Home Decor',
            rating: 4.9,
            inStock: true,
        },
        {
            id: 3,
            name: 'অর্গানিক লেদার মিনিমালিস্ট ওয়ালেট',
            slug: 'organic-leather-wallet',
            price: 950,
            previousPrice: 1200,
            image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&auto=format&fit=crop&q=80',
            category: 'Accessories',
            rating: 4.7,
            inStock: false,
        },
    ]);

    const handleRemoveFromWishlist = (id) => {
        setWishlistItems((prev) => prev.filter((item) => item.id !== id));
    };

    const handleClearWishlist = () => {
        setWishlistItems([]);
    };

    // Calculate Discount Percentage
    const getDiscount = (price, prevPrice) => {
        if (!prevPrice) return null;
        return Math.round(((prevPrice - price) / prevPrice) * 100);
    };

    return (
        <div className="bg-slate-50/60 min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {wishlistItems.length === 0 ? (
                    /* Empty State UI */
                    <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-all duration-300 max-w-xl mx-auto">
                        <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-500 shadow-inner">
                            <Heart className="w-10 h-10 stroke-[1.5]" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-2 font-sans">আপনার উইশলিস্ট খালি!</h2>
                        <p className="text-slate-500 text-sm mb-8 leading-relaxed max-w-md mx-auto">
                            আপনার পছন্দের পন্যগুলো সেভ করে রাখতে উইশলিস্টে যোগ করুন এবং পরবর্তীতে সুবিধামত কেনাকাটা করুন।
                        </p>
                        <Link
                            to="/products"
                            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-7 py-3 rounded-full transition-all duration-300 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 hover:-translate-y-0.5"
                        >
                            <span>কেনাকাটা শুরু করুন</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                ) : (
                    <div>
                        {/* Header Bar */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200/80 gap-4">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">আমার উইশলিস্ট</h1>
                                    <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                        {wishlistItems.length}
                                    </span>
                                </div>
                                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                                    আপনার পছন্দের পণ্যগুলো এক পলকে দেখে অর্ডার করুন
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handleClearWishlist}
                                    className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-rose-600 transition-colors bg-white hover:bg-rose-50 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-rose-200 shadow-sm"
                                >
                                    <Trash2 className="w-4 h-4" />
                                    <span>সব মুছে ফেলুন</span>
                                </button>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {wishlistItems.map((item) => {
                                const discount = getDiscount(item.price, item.previousPrice);
                                return (
                                    <div
                                        key={item.id}
                                        className="bg-white rounded-2xl border border-slate-200/70 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
                                    >
                                        {/* Image Section */}
                                        <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                            />

                                            {/* Top Overlay Badges */}
                                            <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                                                {discount && (
                                                    <span className="bg-rose-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                                                        <Sparkles className="w-3 h-3" /> {discount}% ছাড়
                                                    </span>
                                                )}
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-md shadow-sm ${item.inStock
                                                    ? 'bg-emerald-500/90 text-white'
                                                    : 'bg-slate-700/80 text-white'
                                                    }`}>
                                                    {item.inStock ? 'স্টকে আছে' : 'স্টক আউট'}
                                                </span>
                                            </div>

                                            {/* Quick Delete Button */}
                                            <button
                                                onClick={() => handleRemoveFromWishlist(item.id)}
                                                className="absolute top-3 right-3 w-9 h-9 bg-white/80 hover:bg-rose-600 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600 hover:text-white transition-all duration-200 shadow-md hover:scale-110"
                                                title="রিমুভ করুন"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {/* Details Section */}
                                        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                                                        {item.category}
                                                    </span>
                                                    <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold bg-amber-50 px-2 py-0.5 rounded-md">
                                                        <Star className="w-3.5 h-3.5 fill-current" />
                                                        <span>{item.rating}</span>
                                                    </div>
                                                </div>

                                                <h3 className="text-base font-bold text-slate-800 line-clamp-2 hover:text-emerald-600 transition-colors pt-1">
                                                    <Link to={`/products/${item.slug}`}>
                                                        {item.name}
                                                    </Link>
                                                </h3>
                                            </div>

                                            {/* Price & Action Button Container */}
                                            <div className="pt-2 border-t border-slate-100">
                                                <div className="flex items-baseline gap-2 mb-3">
                                                    <span className="text-xl font-extrabold text-slate-900">
                                                        ৳{item.price.toLocaleString('bn-BD')}
                                                    </span>
                                                    {item.previousPrice && (
                                                        <span className="text-xs text-slate-400 line-through">
                                                            ৳{item.previousPrice.toLocaleString('bn-BD')}
                                                        </span>
                                                    )}
                                                </div>

                                                <button
                                                    disabled={!item.inStock}
                                                    className={`w-full flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-xl transition-all duration-300 ${item.inStock
                                                        ? 'bg-slate-900 hover:bg-emerald-600 text-white shadow-md hover:shadow-emerald-600/25 active:scale-[0.98]'
                                                        : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                                                        }`}
                                                >
                                                    <ShoppingBag className="w-4 h-4" />
                                                    <span>{item.inStock ? 'কার্টে যোগ করুন' : 'স্টক শেষ'}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};