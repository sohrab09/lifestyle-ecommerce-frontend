import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw, Plus, Minus, Check } from 'lucide-react';
import { CartSuccessModal } from '../components/common/CartSuccessModal';

export const ProductDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    // ডেমো প্রোডাক্ট ডাটা (আতর ক্যাটাগরি)
    const product = {
        id: 1,
        title: 'প্রিমিয়াম দেহন আল ওউদ (Dehn Al Oudh)',
        category: 'আতর / পারফিউম',
        rating: 4.8,
        reviewsCount: 42,
        images: [
            'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&auto=format&fit=crop&q=80',
        ],
        // বিভিন্ন সাইজ এবং দামের ভ্যারিয়েন্ট
        variants: [
            { size: '৩ মি.লি.', price: 450, originalPrice: 550, stock: true },
            { size: '৬ মি.লি.', price: 850, originalPrice: 1000, stock: true },
            { size: '১২ মি.লি.', price: 1600, originalPrice: 1900, stock: true }
        ],
        description: 'আমাদের দেহন আল ওউদ একটি অত্যন্ত মার্জিত এবং দীর্ঘস্থায়ী প্রিমিয়াম সুবাস। এটি সম্পূর্ণ প্রাকৃতিক ও অ্যালকোহল-মুক্ত উপাদানে তৈরি, যা আপনাকে সারাদিন এক অনন্য ও অভিজাত অনুভূতি প্রদান করবে।',
        scentNotes: {
            top: 'কম্বোডিয়ান ওউদ, রোজ',
            heart: 'স্যান্ডালউড, অ্যাম্বার',
            base: 'আগারউড, সুইট মাস্ক'
        },
        specifications: [
            { label: 'পণ্যের ধরণ', value: 'প্রিমিয়াম নন-অ্যালকোহলিক আতর' },
            { label: 'স্থায়ীত্ব', value: '১২ থেকে ২৪ ঘণ্টা (কাপড়ে)' },
            { label: 'প্যাকেজিং', value: 'প্রিমিয়াম কাঁচের বোতল ও বক্স' },
            { label: 'উৎপাদন', value: 'ইউএেই (UAE) থেকে আমদানিকৃত' }
        ]
    };

    // States
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [selectedVariant, setSelectedVariant] = useState(product.variants[1]); // Default: 6ml
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Quantity Handler
    const handleQuantity = (type) => {
        if (type === 'inc') setQuantity((prev) => prev + 1);
        if (type === 'dec' && quantity > 1) setQuantity((prev) => prev - 1);
    };

    // Order Action
    const handleAddToCart = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="bg-slate-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Product Card */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Left: Image Gallery */}
                    <div className="space-y-4">
                        {/* Main Image with Zoom Effect */}
                        <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-100 group">
                            <img
                                src={selectedImage}
                                alt={product.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-crosshair"
                            />
                            <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                                প্রিমিয়াম কালেকশন
                            </span>
                        </div>

                        {/* Thumbnail Selection */}
                        <div className="flex gap-3 overflow-x-auto pb-1">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(img)}
                                    className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${selectedImage === img ? 'border-red-600 shadow-sm' : 'border-slate-200 opacity-70 hover:opacity-100'
                                        }`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Info & Order Options */}
                    <div className="flex flex-col justify-between space-y-6">
                        <div>
                            {/* Category & Title */}
                            <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">{product.category}</span>
                            <h1 className="text-2xl font-bold text-slate-900 mt-1">{product.title}</h1>

                            {/* Rating & Review Summary */}
                            <div className="flex items-center gap-2 mt-2">
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                                    ))}
                                </div>
                                <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                                <span className="text-xs text-slate-400">({product.reviewsCount} টি রিভিউ)</span>
                            </div>

                            {/* Price Display */}
                            <div className="mt-4 flex items-baseline gap-3">
                                <span className="text-2xl font-extrabold text-red-600">
                                    ৳{(selectedVariant.price * quantity).toLocaleString('bn-BD')}
                                </span>
                                {selectedVariant.originalPrice && (
                                    <span className="text-sm font-medium text-slate-400 line-through">
                                        ৳{(selectedVariant.originalPrice * quantity).toLocaleString('bn-BD')}
                                    </span>
                                )}
                                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">
                                    ইন স্টক
                                </span>
                            </div>

                            <hr className="my-5 border-slate-100" />

                            {/* Variant Selector (Size / Volume) */}
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-slate-700 uppercase">
                                    বোতলের সাইজ নির্বাচন করুন: <span className="text-red-600">{selectedVariant.size}</span>
                                </label>
                                <div className="flex flex-wrap gap-2.5">
                                    {product.variants.map((variant, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedVariant(variant)}
                                            className={`px-4 py-2 text-xs font-semibold rounded-md border transition-all flex items-center gap-1.5 ${selectedVariant.size === variant.size
                                                ? 'border-red-600 bg-red-50 text-red-600 shadow-sm'
                                                : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-white'
                                                }`}
                                        >
                                            {selectedVariant.size === variant.size && <Check className="w-3.5 h-3.5" />}
                                            <span>{variant.size}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity Selector */}
                            <div className="mt-5 space-y-2">
                                <label className="block text-xs font-bold text-slate-700 uppercase">পরিমাণ:</label>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center border border-slate-200 rounded-md bg-white">
                                        <button
                                            onClick={() => handleQuantity('dec')}
                                            className="p-2 text-slate-600 hover:text-red-600 transition-colors"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="px-4 text-xs font-bold text-slate-800">{quantity}</span>
                                        <button
                                            onClick={() => handleQuantity('inc')}
                                            className="p-2 text-slate-600 hover:text-red-600 transition-colors"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3 pt-4 border-t border-slate-100">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors text-xs flex items-center justify-center gap-2 shadow-sm"
                                >
                                    <ShoppingBag className="w-4 h-4" />
                                    <span>অর্ডার করুন (কার্টে যোগ করুন)</span>
                                </button>
                                <button
                                    onClick={() => {
                                        handleAddToCart();
                                        navigate('/cart');
                                    }}
                                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-md transition-colors text-xs flex items-center justify-center gap-2"
                                >
                                    <span>সরাসরি কিনুন</span>
                                </button>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-3 gap-2 pt-3 text-[11px] text-slate-500 border-t border-slate-100">
                                <div className="flex items-center gap-1.5">
                                    <Truck className="w-4 h-4 text-red-600" />
                                    <span>দ্রুত ডেলিভারি</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <ShieldCheck className="w-4 h-4 text-red-600" />
                                    <span>১০০% আসল পণ্য</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <RotateCcw className="w-4 h-4 text-red-600" />
                                    <span>সহজ রিটার্ন</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Product Tabs: Description, Scent Notes, Specifications */}
                <div className="mt-8 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <div className="flex border-b border-slate-200 gap-6 text-xs font-bold uppercase tracking-wider">
                        <button
                            onClick={() => setActiveTab('description')}
                            className={`pb-3 transition-colors border-b-2 ${activeTab === 'description' ? 'border-red-600 text-red-600' : 'border-transparent text-slate-500 hover:text-slate-800'
                                }`}
                        >
                            বিবরণ (Description)
                        </button>
                        <button
                            onClick={() => setActiveTab('scent')}
                            className={`pb-3 transition-colors border-b-2 ${activeTab === 'scent' ? 'border-red-600 text-red-600' : 'border-transparent text-slate-500 hover:text-slate-800'
                                }`}
                        >
                            ফ্র্যাগ্রেন্স নোটস (Scent Notes)
                        </button>
                        <button
                            onClick={() => setActiveTab('specs')}
                            className={`pb-3 transition-colors border-b-2 ${activeTab === 'specs' ? 'border-red-600 text-red-600' : 'border-transparent text-slate-500 hover:text-slate-800'
                                }`}
                        >
                            স্পেসিফিকেশন (Specifications)
                        </button>
                    </div>

                    <div className="py-5 text-xs text-slate-600 leading-relaxed">
                        {activeTab === 'description' && (
                            <p>{product.description}</p>
                        )}

                        {activeTab === 'scent' && (
                            <div className="space-y-3 max-w-md">
                                <div className="flex justify-between p-2.5 bg-slate-50 rounded border border-slate-100">
                                    <span className="font-bold text-slate-800">Top Notes (প্রথম সুবাস):</span>
                                    <span>{product.scentNotes.top}</span>
                                </div>
                                <div className="flex justify-between p-2.5 bg-slate-50 rounded border border-slate-100">
                                    <span className="font-bold text-slate-800">Heart Notes (মূল সুবাস):</span>
                                    <span>{product.scentNotes.heart}</span>
                                </div>
                                <div className="flex justify-between p-2.5 bg-slate-50 rounded border border-slate-100">
                                    <span className="font-bold text-slate-800">Base Notes (স্থায়ী সুবাস):</span>
                                    <span>{product.scentNotes.base}</span>
                                </div>
                            </div>
                        )}

                        {activeTab === 'specs' && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                                {product.specifications.map((spec, idx) => (
                                    <div key={idx} className="flex justify-between p-2.5 bg-slate-50 rounded border border-slate-100">
                                        <span className="font-bold text-slate-800">{spec.label}:</span>
                                        <span>{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {/* Cart Success Modal */}
            <CartSuccessModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};