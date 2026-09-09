import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, Heart, Star } from 'lucide-react';

export const Wishlist = () => {
    // Mock Wishlist Data
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

    return (
        <div className="bg-slate-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {wishlistItems.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-slate-100 p-8">
                        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
                            <Heart className="w-8 h-8" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 mb-2">আপনার উইশলিস্ট খালি!</h2>
                        <p className="text-slate-500 text-sm mb-6">আপনার পছন্দের পন্যগুলো সেভ করে রাখতে উইশলিস্টে যোগ করুন।</p>
                        <Link
                            to="/products"
                            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors shadow-sm"
                        >
                            কেনাকাটা শুরু করুন
                        </Link>
                    </div>
                ) : (
                    <div>
                        {/* Header */}
                        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900">আমার উইশলিস্ট</h1>
                                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                                    মোট {wishlistItems.length} টি প্রোডাক্ট সেভ করা আছে
                                </p>
                            </div>
                            <button
                                onClick={handleClearWishlist}
                                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-red-600 transition-colors bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-sm"
                            >
                                <Trash2 className="w-3.5 h-3.5" />
                                <span>সব মুছে ফেলুন</span>
                            </button>
                        </div>

                        {/* Wishlist Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {wishlistItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col justify-between group"
                                >
                                    <div className="relative">
                                        {/* Image */}
                                        <div className="h-56 bg-slate-100 overflow-hidden relative">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <button
                                                onClick={() => handleRemoveFromWishlist(item.id)}
                                                className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-500 hover:text-red-600 transition-colors shadow"
                                                title="Remove"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4 space-y-2">
                                            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                                                {item.category}
                                            </span>
                                            <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 min-h-[2.5rem]">
                                                <Link to={`/products/${item.slug}`} className="hover:text-emerald-600 transition-colors">
                                                    {item.name}
                                                </Link>
                                            </h3>

                                            <div className="flex items-center gap-1 text-amber-500 text-xs">
                                                <Star className="w-3.5 h-3.5 fill-current" />
                                                <span className="font-semibold">{item.rating}</span>
                                            </div>

                                            <div className="flex items-baseline gap-2 pt-1">
                                                <span className="text-lg font-bold text-slate-900">৳{item.price.toLocaleString('bn-BD')}</span>
                                                {item.previousPrice && (
                                                    <span className="text-xs text-slate-400 line-through">
                                                        ৳{item.previousPrice.toLocaleString('bn-BD')}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="p-4 pt-0">
                                        <button
                                            disabled={!item.inStock}
                                            className={`w-full flex items-center justify-center gap-2 text-xs font-bold py-2.5 rounded-lg transition-colors ${item.inStock
                                                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                                                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                                }`}
                                        >
                                            <ShoppingBag className="w-4 h-4" />
                                            <span>{item.inStock ? 'কার্টে যোগ করুন' : 'স্টক আউট'}</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};