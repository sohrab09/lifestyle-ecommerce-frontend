import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Trash2,
    Heart,
    Plus,
    Minus,
    Info,
    ShoppingBag,
    ArrowRight,
    Tag,
    ShieldCheck,
    Truck,
    ArrowLeft,
    Sparkles
} from 'lucide-react';

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
    const [couponApplied, setCouponApplied] = useState(false);
    const deliveryFee = 79;
    const FREE_SHIPPING_THRESHOLD = 10000;

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
    const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
    const finalDeliveryFee = isFreeShipping ? 0 : deliveryFee;
    const total = cartItems.length > 0 ? subtotal + finalDeliveryFee : 0;
    const progressPercentage = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

    const handleApplyCoupon = (e) => {
        e.preventDefault();
        if (couponCode.trim()) {
            setCouponApplied(true);
        }
    };

    return (
        <div className="bg-slate-50/60 min-h-screen py-10 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Header */}
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                            শপিং কার্ট
                        </h1>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                            আপনার ব্যাগে মোট {cartItems.length} টি আইটেম রয়েছে
                        </p>
                    </div>
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 px-4 py-2 rounded-xl transition-all shadow-sm"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>কেনাকাটা চালিয়ে যান</span>
                    </Link>
                </div>

                {cartItems.length === 0 ? (
                    /* Empty State UI */
                    <div className="text-center py-20 bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm max-w-lg mx-auto">
                        <div className="w-20 h-20 bg-amber-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-amber-600 shadow-inner">
                            <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">আপনার শপিং ব্যাগ খালি!</h2>
                        <p className="text-slate-500 text-sm mb-8 leading-relaxed max-w-xs mx-auto">
                            আপনি এখনও কোনো পণ্য যুক্ত করেননি। আমাদের নতুন প্রিমিয়াম কালেকশনগুলো ঘুরে দেখুন।
                        </p>
                        <Link
                            to="/products"
                            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-emerald-600 text-white text-sm font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-slate-900/10 hover:shadow-emerald-600/20 active:scale-95"
                        >
                            <span>কেনাকাটা শুরু করুন</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8 items-start">

                        {/* Left Section: Cart Items */}
                        <div className="w-full lg:w-2/3 space-y-4">

                            {/* Free Shipping Tracker */}
                            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm">
                                <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-2">
                                    <span className="flex items-center gap-2 text-slate-700">
                                        <Truck className="w-4 h-4 text-emerald-600" />
                                        {isFreeShipping ? (
                                            <span className="text-emerald-600">অভিনন্দন! আপনি ফ্রি শিপিং পাচ্ছেন! 🎉</span>
                                        ) : (
                                            <span>
                                                আর <strong className="text-slate-900">৳{(FREE_SHIPPING_THRESHOLD - subtotal).toLocaleString('bn-BD')}</strong> কেনাকাটা করলে <strong className="text-emerald-600">ফ্রি শিপিং</strong>!
                                            </span>
                                        )}
                                    </span>
                                    <span className="text-slate-500 font-mono text-[11px]">{Math.round(progressPercentage)}%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div
                                        className="bg-emerald-500 h-full rounded-full transition-all duration-500 ease-out"
                                        style={{ width: `${progressPercentage}%` }}
                                    />
                                </div>
                            </div>

                            {/* Header Bar */}
                            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-center justify-between">
                                <span className="text-sm font-bold text-slate-800">পণ্যের তালিকা</span>
                                <button
                                    onClick={handleClearAll}
                                    className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-rose-600 transition-colors bg-slate-50 hover:bg-rose-50 px-3 py-1.5 rounded-lg border border-slate-100 hover:border-rose-100"
                                >
                                    <Trash2 className="w-3.5 h-3.5" />
                                    <span>সব মুছে ফেলুন</span>
                                </button>
                            </div>

                            {/* Items List */}
                            <div className="space-y-3">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                                    >
                                        <div className="flex items-center gap-4">
                                            {/* Thumbnail */}
                                            <div className="w-20 h-24 sm:w-20 sm:h-20 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>

                                            {/* Details */}
                                            <div className="space-y-1">
                                                <h3 className="text-sm font-bold text-slate-800 leading-snug hover:text-emerald-600 transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-xs text-slate-400">একক মূল্য: ৳{item.price.toLocaleString('bn-BD')}</p>

                                                {/* Action Buttons: Wishlist & Delete */}
                                                <div className="flex items-center gap-3 pt-2">
                                                    <button
                                                        onClick={() => handleRemoveItem(item.id)}
                                                        className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-rose-600 transition-colors"
                                                    >
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                        <span>সরান</span>
                                                    </button>
                                                    <span className="text-slate-200">|</span>
                                                    <button className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-amber-600 transition-colors">
                                                        <Heart className="w-3.5 h-3.5" />
                                                        <span>উইশলিস্টে রাখুন</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Controls & Price */}
                                        <div className="flex items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                                            {/* Quantity Counter */}
                                            <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50/80 shadow-sm overflow-hidden">
                                                <button
                                                    onClick={() => handleQuantityChange(item.id, -1)}
                                                    className="p-2 text-slate-600 hover:bg-slate-200 transition-colors"
                                                >
                                                    <Minus className="w-3.5 h-3.5" />
                                                </button>
                                                <span className="text-xs font-bold px-3 text-slate-900 font-mono">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => handleQuantityChange(item.id, 1)}
                                                    className="p-2 text-slate-600 hover:bg-slate-200 transition-colors"
                                                >
                                                    <Plus className="w-3.5 h-3.5" />
                                                </button>
                                            </div>

                                            {/* Total Item Price */}
                                            <div className="text-right">
                                                <span className="text-base font-black text-slate-900">
                                                    ৳{(item.price * item.quantity).toLocaleString('bn-BD')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Section: Order Summary */}
                        <div className="w-full lg:w-1/3">
                            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-6 shadow-sm sticky top-6">

                                <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-amber-500" />
                                    <span>অর্ডার সামারি</span>
                                </h2>

                                {/* Breakdown */}
                                <div className="space-y-3.5 text-xs">
                                    <div className="flex items-center justify-between text-slate-600">
                                        <span>উপমোট (Subtotal)</span>
                                        <span className="font-bold text-slate-800 text-sm">৳{subtotal.toLocaleString('bn-BD')}</span>
                                    </div>

                                    <div className="flex items-center justify-between text-slate-600">
                                        <div className="flex items-center gap-1.5">
                                            <span>ডেলিভারি ফি</span>
                                            <Info className="w-3.5 h-3.5 text-slate-400 cursor-pointer" />
                                        </div>
                                        {isFreeShipping ? (
                                            <span className="font-bold text-emerald-600">ফ্রি</span>
                                        ) : (
                                            <span className="font-bold text-slate-800">৳{deliveryFee.toLocaleString('bn-BD')}</span>
                                        )}
                                    </div>

                                    {couponApplied && (
                                        <div className="flex items-center justify-between text-emerald-600">
                                            <span>কুপন ডিসকাউন্ট</span>
                                            <span className="font-bold">-৳১৫০</span>
                                        </div>
                                    )}

                                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                                        <span className="text-sm font-bold text-slate-900">সর্বমোট (Total)</span>
                                        <span className="text-xl font-black text-slate-900">
                                            ৳{(couponApplied ? total - 150 : total).toLocaleString('bn-BD')}
                                        </span>
                                    </div>
                                </div>

                                {/* Coupon Code Input */}
                                <form onSubmit={handleApplyCoupon} className="space-y-2 pt-2">
                                    <label className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                                        <Tag className="w-3.5 h-3.5 text-slate-400" />
                                        <span>কুপন কোড ব্যবহার করুন</span>
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="text"
                                            placeholder="কুপন কোড লিখুন"
                                            value={couponCode}
                                            onChange={(e) => setCouponCode(e.target.value)}
                                            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-slate-800 transition-colors"
                                        />
                                        <button
                                            type="submit"
                                            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm active:scale-95"
                                        >
                                            অ্যাপ্লাই
                                        </button>
                                    </div>
                                </form>

                                {/* Checkout Button */}
                                <div className="pt-2">
                                    <button
                                        onClick={() => navigate('/checkout')}
                                        className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-3.5 px-6 rounded-xl transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-95"
                                    >
                                        <span>অর্ডার করতে এগিয়ে যান</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Security Assurance */}
                                <div className="pt-2 flex items-center justify-center gap-2 text-slate-500 text-[11px]">
                                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                    <span>নিরাপদ পেমেন্ট ও এনক্রিপ্টেড চেকআউট</span>
                                </div>

                            </div>
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
};