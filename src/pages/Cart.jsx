import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Heart, Plus, Minus, Info } from 'lucide-react';

export const Cart = () => {
    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            title: 'HSC 28 ইংরেজি প্রথম পত্র: মাস্টার বুক',
            price: 680,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=300&auto=format&fit=crop&q=80',
        },
        {
            id: 2,
            title: 'সেট দাওরা ৯ পদ [১২ কিতাব]',
            price: 9300,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&auto=format&fit=crop&q=80',
        },
        {
            id: 3,
            title: 'সেট সিহাহ সিত্তাহ ৬ পদ [৮ কিতাব]',
            price: 7155,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&auto=format&fit=crop&q=80',
        },
    ]);

    const [couponCode, setCouponCode] = useState('');
    const deliveryFee = 79;

    // Quantity Handlers
    const handleQuantityChange = (id, change) => {
        setCartItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const newQty = item.quantity + change;
                    return newQty > 0 ? { ...item, quantity: newQty } : item;
                }
                return item;
            })
        );
    };

    // Remove Item
    const handleRemoveItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    // Clear All Items
    const handleClearAll = () => {
        setCartItems([]);
    };

    // Calculations
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const total = cartItems.length > 0 ? subtotal + deliveryFee : 0;

    return (
        <div className="bg-white min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {cartItems.length === 0 ? (
                    <div className="text-center py-16">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">আপনার শপিং ব্যাগ খালি</h2>
                        <Link
                            to="/products"
                            className="inline-block bg-red-600 text-white text-sm font-semibold px-6 py-2.5 rounded-md hover:bg-red-700 transition-colors"
                        >
                            কেনাকাটা শুরু করুন
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8 items-start">

                        {/* Left Section: Cart Items */}
                        <div className="w-full lg:w-2/3">
                            {/* Header Bar */}
                            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-6">
                                <h1 className="text-lg font-bold text-slate-900">শপিং ব্যাগ</h1>
                                <button
                                    onClick={handleClearAll}
                                    className="flex items-center gap-1 text-xs text-slate-500 hover:text-red-600 transition-colors"
                                >
                                    <Trash2 className="w-3.5 h-3.5" />
                                    <span>Clear All</span>
                                </button>
                            </div>

                            {/* Items List */}
                            <div className="divide-y divide-slate-100">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="py-5 flex items-start justify-between gap-4">
                                        <div className="flex gap-4">
                                            {/* Thumbnail */}
                                            <div className="w-16 h-20 bg-slate-100 rounded border border-slate-200 overflow-hidden flex-shrink-0">
                                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                            </div>

                                            {/* Details */}
                                            <div className="space-y-2">
                                                <h3 className="text-sm font-medium text-slate-800 leading-snug">
                                                    {item.title} <span className="text-slate-500 font-normal">X {item.quantity}</span>
                                                </h3>

                                                {/* Quantity Counter */}
                                                <div className="flex items-center gap-2 border border-slate-200 rounded w-fit px-2 py-0.5 text-slate-600">
                                                    <button
                                                        onClick={() => handleQuantityChange(item.id, -1)}
                                                        className="hover:text-red-600 p-0.5"
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="text-xs font-semibold px-2">{item.quantity}</span>
                                                    <button
                                                        onClick={() => handleQuantityChange(item.id, 1)}
                                                        className="hover:text-red-600 p-0.5"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>

                                                {/* Action Icons */}
                                                <div className="flex items-center gap-3 pt-1">
                                                    <button
                                                        onClick={() => handleRemoveItem(item.id)}
                                                        className="text-slate-400 hover:text-red-600 transition-colors"
                                                        title="Delete"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        className="text-slate-400 hover:text-red-600 transition-colors"
                                                        title="Wishlist"
                                                    >
                                                        <Heart className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div className="text-right flex-shrink-0">
                                            <span className="text-sm font-bold text-slate-900">৳{(item.price * item.quantity).toLocaleString('bn-BD')}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Checkout Button */}
                            <div className="mt-8">
                                <button
                                    onClick={() => navigate('/checkout')}
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-md transition-colors text-center text-sm shadow-sm"
                                >
                                    অর্ডার করতে এগিয়ে যান
                                </button>
                            </div>
                        </div>

                        {/* Right Section: Order Summary */}
                        <div className="w-full lg:w-1/3">
                            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-5 shadow-sm">

                                {/* Subtotal */}
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-600">মোট দাম</span>
                                    <span className="font-semibold text-slate-800">৳{subtotal.toLocaleString('bn-BD')}</span>
                                </div>

                                <hr className="border-slate-100" />

                                {/* Delivery Fee */}
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-1.5 text-slate-600">
                                        <span>ডেলিভারি ফি</span>
                                        <Info className="w-3.5 h-3.5 text-slate-400 cursor-pointer" />
                                    </div>
                                    <span className="font-semibold text-slate-800">৳{deliveryFee.toLocaleString('bn-BD')}</span>
                                </div>

                                <hr className="border-slate-100" />

                                {/* Grand Total */}
                                <div className="flex items-center justify-between text-sm">
                                    <span className="font-bold text-slate-800">সর্বমোট</span>
                                    <span className="font-bold text-slate-900 text-base">৳{total.toLocaleString('bn-BD')}</span>
                                </div>

                                {/* Coupon Code Section */}
                                <div className="pt-2">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="text"
                                            placeholder="Enter your coupon code"
                                            value={couponCode}
                                            onChange={(e) => setCouponCode(e.target.value)}
                                            className="flex-1 border border-slate-200 rounded-md px-3 py-2 text-xs text-slate-700 focus:outline-none focus:border-red-500"
                                        />
                                        <button
                                            type="button"
                                            className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-md transition-colors"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
};