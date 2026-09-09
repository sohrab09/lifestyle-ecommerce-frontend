import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleCartDrawer } from '../../store/slices/uiSlice';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

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

    // কোয়ান্টিটি পরিবর্তন করার হ্যান্ডলার
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
            {/* Backdrop / Overlay */}
            <div
                className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
                onClick={() => dispatch(toggleCartDrawer())}
            />

            {/* Drawer Body */}
            <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10">
                {/* Drawer Header */}
                <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                    <div className="flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5 text-emerald-600" />
                        <h2 className="text-base font-bold text-slate-800">
                            আপনার শপিং ব্যাগ ({cartItems.length})
                        </h2>
                    </div>
                    <button
                        onClick={() => dispatch(toggleCartDrawer())}
                        className="p-1 rounded-md text-slate-500 hover:bg-slate-200 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Drawer Content */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 divide-y divide-slate-100">
                    {cartItems.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-400">
                                <ShoppingBag className="w-8 h-8" />
                            </div>
                            <p className="text-slate-600 font-medium text-sm mb-1">আপনার ব্যাগটি খালি!</p>
                            <p className="text-slate-400 text-xs">পছন্দের পণ্য যুক্ত করতে কেনাকাটা চালিয়ে যান।</p>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="pt-4 first:pt-0 flex gap-3">
                                {/* Image */}
                                <div className="w-16 h-16 bg-slate-100 rounded-lg border border-slate-200 overflow-hidden flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>

                                {/* Details */}
                                <div className="flex-1 space-y-1">
                                    <h3 className="text-xs font-semibold text-slate-800 line-clamp-2 leading-snug">
                                        {item.name}
                                    </h3>
                                    <div className="text-xs font-bold text-slate-900">
                                        ৳{item.price.toLocaleString('bn-BD')}
                                    </div>

                                    {/* Quantity & Actions */}
                                    <div className="flex items-center justify-between pt-1">
                                        <div className="flex items-center gap-2 border border-slate-200 rounded px-1.5 py-0.5 bg-slate-50 text-slate-600">
                                            <button
                                                onClick={() => handleQuantityChange(item.id, -1)}
                                                className="hover:text-emerald-600 p-0.5"
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="text-xs font-semibold px-1">{item.quantity}</span>
                                            <button
                                                onClick={() => handleQuantityChange(item.id, 1)}
                                                className="hover:text-emerald-600 p-0.5"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => handleRemoveItem(item.id)}
                                            className="text-slate-400 hover:text-red-600 transition-colors p-1"
                                            title="Remove Item"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Drawer Footer */}
                {cartItems.length > 0 && (
                    <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-3">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600 font-medium">উপমোট (Subtotal)</span>
                            <span className="font-bold text-slate-900 text-base">
                                ৳{subtotal.toLocaleString('bn-BD')}
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-1">
                            <button
                                onClick={handleViewCartPage}
                                className="w-full bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 text-xs font-bold py-2.5 rounded-lg transition-colors text-center"
                            >
                                কার্ট পেজ দেখুন
                            </button>
                            <button
                                onClick={handleProceedToCheckout}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1 shadow-sm"
                            >
                                <span>অর্ডার করুন</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};