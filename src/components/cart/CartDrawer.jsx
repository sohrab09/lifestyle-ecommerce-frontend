import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleCartDrawer } from '../../store/slices/uiSlice';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, Sparkles, ShieldCheck, Truck } from 'lucide-react';

export const CartDrawer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isCartDrawerOpen = useSelector((state) => state.ui.isCartDrawerOpen);

    // ডামি কার্ট ডাটা
    const [cartItems, setCartItems] = useState([
        {
            id: 'prod-1',
            name: 'Dehn Al Oudh Royale - Premium Attar 6ml',
            price: 1850,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=300',
        },
        {
            id: 'prod-2',
            name: 'Luxury Velvet Prayer Mat (Janamaz)',
            price: 1250,
            quantity: 2,
            image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=300',
        },
    ]);

    // ফ্রি শিপিং টার্গেট (যেমন: ৫,০০০ টাকা)
    const FREE_SHIPPING_TARGET = 5000;

    // কোয়ান্টিটি পরিবর্তন করার হ্যান্ডলার
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

    // আইটেম মুছে ফেলার হ্যান্ডলার
    const handleRemoveItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    // সাবটোটাল হিসাব
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    // ফ্রি শিপিং ক্যালকুলেশন
    const progressToFreeShipping = Math.min((subtotal / FREE_SHIPPING_TARGET) * 100, 100);
    const amountLeftForFreeShipping = FREE_SHIPPING_TARGET - subtotal;

    const handleProceedToCheckout = () => {
        dispatch(toggleCartDrawer());
        navigate('/checkout');
    };

    const handleViewCartPage = () => {
        dispatch(toggleCartDrawer());
        navigate('/cart');
    };

    if (!isCartDrawerOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop / Overlay with smooth blur */}
            <div
                className="fixed inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-300"
                onClick={() => dispatch(toggleCartDrawer())}
            />

            {/* Drawer Body */}
            <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 font-sans border-l border-slate-200/80">

                {/* Drawer Header */}
                <div className="p-5 border-b border-slate-100 bg-slate-900 text-white flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/30">
                            <ShoppingBag className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-base font-bold leading-tight">আপনার শপিং ব্যাগ</h2>
                            <p className="text-[11px] text-slate-400 font-medium">
                                মোট {totalItemsCount} টি প্রোডাক্ট যুক্ত আছে
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => dispatch(toggleCartDrawer())}
                        className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Free Shipping Progress Indicator */}
                {cartItems.length > 0 && (
                    <div className="bg-amber-50/70 border-b border-amber-200/60 px-5 py-3">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1.5">
                            <span className="flex items-center gap-1.5 text-amber-900">
                                <Truck className="w-4 h-4 text-amber-600" />
                                {amountLeftForFreeShipping > 0
                                    ? `আর ৳${amountLeftForFreeShipping.toLocaleString('bn-BD')} কেনাকাটা করলেই ফ্রি শিপিং!`
                                    : 'অভিনন্দন! আপনি ফ্রি শিপিং পাচ্ছেন! 🎉'}
                            </span>
                            <span className="text-[10px] text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full font-mono">
                                {Math.round(progressToFreeShipping)}%
                            </span>
                        </div>
                        <div className="w-full bg-amber-200/60 h-1.5 rounded-full overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${progressToFreeShipping}%` }}
                            />
                        </div>
                    </div>
                )}

                {/* Drawer Content Area */}
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                    {cartItems.length === 0 ? (
                        <div className="text-center py-20 px-4">
                            <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center mx-auto mb-4 text-slate-400 shadow-inner">
                                <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-1">আপনার ব্যাগটি খালি!</h3>
                            <p className="text-slate-500 text-xs mb-6 max-w-xs mx-auto">
                                আপনার পছন্দের প্রিমিয়াম পণ্যগুলো যোগ করতে কেনাকাটা শুরু করুন।
                            </p>
                            <button
                                onClick={() => dispatch(toggleCartDrawer())}
                                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-md active:scale-95"
                            >
                                <Sparkles className="w-4 h-4" />
                                <span>পণ্য ব্রাউজ করুন</span>
                            </button>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex gap-3.5 group relative"
                            >
                                {/* Product Image */}
                                <div className="w-20 h-20 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100 relative">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex-1 flex flex-col justify-between py-0.5">
                                    <div>
                                        <div className="flex justify-between items-start gap-2">
                                            <h3 className="text-xs font-bold text-slate-800 line-clamp-2 leading-snug hover:text-amber-600 transition-colors">
                                                {item.name}
                                            </h3>
                                            {/* Delete Button */}
                                            <button
                                                onClick={() => handleRemoveItem(item.id)}
                                                className="text-slate-400 hover:text-rose-600 transition-colors p-1 hover:bg-rose-50 rounded-lg -mr-1"
                                                title="রিমুভ করুন"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Price & Quantity Controls */}
                                    <div className="flex items-center justify-between pt-2 mt-1 border-t border-slate-100">
                                        <div className="text-sm font-black text-slate-900">
                                            ৳{(item.price * item.quantity).toLocaleString('bn-BD')}
                                        </div>

                                        <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50 shadow-sm overflow-hidden">
                                            <button
                                                onClick={() => handleQuantityChange(item.id, -1)}
                                                className="p-1.5 text-slate-600 hover:bg-slate-200 transition-colors"
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="text-xs font-bold px-2.5 text-slate-800 font-mono">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => handleQuantityChange(item.id, 1)}
                                                className="p-1.5 text-slate-600 hover:bg-slate-200 transition-colors"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Drawer Footer */}
                {cartItems.length > 0 && (
                    <div className="p-5 border-t border-slate-200/80 bg-slate-50 space-y-4">
                        {/* Subtotal Breakup */}
                        <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs text-slate-500">
                                <span>সাবটোটাল</span>
                                <span className="font-semibold text-slate-700">৳{subtotal.toLocaleString('bn-BD')}</span>
                            </div>
                            <div className="flex items-center justify-between text-xs text-slate-500">
                                <span>ডেলিভারি চার্জ</span>
                                <span className="text-emerald-600 font-semibold">চেকআউটে হিসেব হবে</span>
                            </div>
                            <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                                <span className="text-sm font-bold text-slate-900">সর্বমোট (Total)</span>
                                <span className="text-lg font-black text-slate-900">
                                    ৳{subtotal.toLocaleString('bn-BD')}
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-2 pt-1">
                            <button
                                onClick={handleProceedToCheckout}
                                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold py-3.5 px-4 rounded-xl transition-all text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95"
                            >
                                <span>চেকআউট এ যান</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button
                                onClick={handleViewCartPage}
                                className="w-full bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold py-3 rounded-xl transition-colors border border-slate-200 text-center shadow-sm"
                            >
                                কার্ট পেজ দেখুন
                            </button>
                        </div>

                        {/* Guarantee Note */}
                        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            <span>১০০% নিরাপদ চেকআউট প্রসেস</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};