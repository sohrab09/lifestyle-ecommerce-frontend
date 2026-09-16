import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Star, ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw,
    Plus, Minus, Check, PlayCircle, Share2, Sparkles, Eye, Zap,
    MessageSquare, ThumbsUp, UserCheck
} from 'lucide-react';
import { CartSuccessModal } from '../components/common/CartSuccessModal';

export const ProductDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    // ডেমো প্রোডাক্ট ডাটা
    const product = {
        id: 1,
        title: 'প্রিমিয়াম দেহন আল ওউদ (Dehn Al Oudh Royale)',
        category: 'আতর / পারফিউম',
        rating: 4.9,
        reviewsCount: 128,
        images: [
            'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&auto=format&fit=crop&q=80',
        ],
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        variants: [
            { size: '৩ মি.লি.', price: 450, originalPrice: 550, stock: true },
            { size: '৬ মি.লি.', price: 850, originalPrice: 1000, stock: true },
            { size: '১২ মি.লি.', price: 1600, originalPrice: 1900, stock: true }
        ],
        description: 'আমাদের দেহন আল ওউদ একটি অত্যন্ত মার্জিত এবং দীর্ঘস্থায়ী প্রিমিয়াম সুবাস। এটি সম্পূর্ণ প্রাকৃতিক ও অ্যালকোহল-মুক্ত উপাদানে তৈরি, যা আপনাকে সারাদিন এক অনন্য ও অভিজাত অনুভূতি প্রদান করবে।',
        scentNotes: {
            top: 'কম্বোডিয়ান ওউদ, রোজা মাস্ক',
            heart: 'রয়াল স্যান্ডালউড, ওয়ার্ম অ্যাম্বার',
            base: 'আগারউড, সুইট সুইট মাস্ক'
        },
        specifications: [
            { label: 'পণ্যের ধরণ', value: 'প্রিমিয়াম নন-অ্যালকোহলিক আতর' },
            { label: 'স্থায়ীত্ব', value: '১২ থেকে ২৪ ঘণ্টা (কাপড়ে)' },
            { label: 'প্যাকেজিং', value: 'প্রিমিয়াম কাঁচের বোতল ও বক্স' },
            { label: 'উৎপাদন', value: 'ইউএই (UAE) থেকে আমদানিকৃত' }
        ]
    };

    // ডামি কাস্টমার রিভিউ ডাটা
    const reviews = [
        {
            id: 1,
            name: 'আব্দুল্লাহ আল মামুন',
            rating: 5,
            date: '১২ সেপ্টেম্বর, ২০২৪',
            verified: true,
            comment: 'মাশাল্লাহ! সুবাসটা একদম রাজকীয়। কাপড়ে দেওয়ার পর প্রায় ২ দিন ঘ্রাণ ছিল। প্যাকেজিংটাও অসাধারণ প্রিমিয়াম।',
            likes: 14
        },
        {
            id: 2,
            name: 'তানভীর আহমেদ',
            rating: 5,
            date: '০৫ সেপ্টেম্বর, ২০২৪',
            verified: true,
            comment: 'আগে অনেক জায়গা থেকে ওউদ কিনে ঠকেছি, কিন্তু এটি অরিজিনাল কম্বোডিয়ান ওউদের ফিল দেয়। ডেলিভারিও খুব দ্রুত পেয়েছি।',
            likes: 8
        },
        {
            id: 3,
            name: 'সাদিয়া পারভীন',
            rating: 4,
            date: '২৮ আগস্ট, ২০২৪',
            verified: true,
            comment: 'স্বামীকে গিফট করার জন্য ৬ মি.লি. নিয়েছিলাম। উনি খুব পছন্দ করেছেন। গন্ধটা বেশ মার্জিত, একদমই ঝাঁঝালো না।',
            likes: 5
        }
    ];

    // States
    const [selectedMedia, setSelectedMedia] = useState({ type: 'image', url: product.images[0] });
    const [selectedVariant, setSelectedVariant] = useState(product.variants[1]);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    // Dynamic Scroll to Reviews Handler
    const scrollToReviews = (e) => {
        e.preventDefault();
        setActiveTab('reviews');
        const reviewSection = document.getElementById('reviews-section');
        if (reviewSection) {
            reviewSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Quantity Handler
    const handleQuantity = (type) => {
        if (type === 'inc') setQuantity((prev) => prev + 1);
        if (type === 'dec' && quantity > 1) setQuantity((prev) => prev - 1);
    };

    // Calculate Discount Percentage
    const discountPercent = Math.round(
        ((selectedVariant.originalPrice - selectedVariant.price) / selectedVariant.originalPrice) * 100
    );

    const handleAddToCart = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="bg-slate-900/5 min-h-screen py-10 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Section / Main Product Card */}
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl overflow-hidden p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* Left Grid: Media Gallery (5 cols) */}
                    <div className="lg:col-span-6 space-y-4">
                        {/* Main Image Container */}
                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-200/60 shadow-inner group">
                            {selectedMedia.type === 'image' ? (
                                <img
                                    src={selectedMedia.url}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out cursor-zoom-in"
                                />
                            ) : (
                                <video
                                    src={selectedMedia.url}
                                    controls
                                    autoPlay
                                    className="w-full h-full object-cover"
                                />
                            )}

                            {/* Badges */}
                            <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                                <span className="inline-flex items-center gap-1 bg-amber-500 text-slate-950 font-bold text-[11px] px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                                    <Sparkles className="w-3.5 h-3.5" /> প্রিমিয়াম কালেকশন
                                </span>
                                {discountPercent > 0 && (
                                    <span className="bg-red-600 text-white font-extrabold text-[11px] px-3 py-1 rounded-full shadow-md">
                                        {discountPercent}% ছাড়
                                    </span>
                                )}
                            </div>

                            {/* Wishlist Button */}
                            <button
                                onClick={() => setIsLiked(!isLiked)}
                                className="absolute top-4 right-4 p-2.5 bg-white/80 hover:bg-white text-slate-700 rounded-full shadow-md transition-all z-10 hover:scale-110 backdrop-blur-md"
                            >
                                <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                            </button>
                        </div>

                        {/* Thumbnail Bar */}
                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedMedia({ type: 'image', url: img })}
                                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${selectedMedia.type === 'image' && selectedMedia.url === img
                                        ? 'border-amber-500 ring-2 ring-amber-500/30 scale-105'
                                        : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-300'
                                        }`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}

                            {product.videoUrl && (
                                <button
                                    onClick={() => setSelectedMedia({ type: 'video', url: product.videoUrl })}
                                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 bg-slate-950 flex items-center justify-center ${selectedMedia.type === 'video'
                                        ? 'border-amber-500 ring-2 ring-amber-500/30 scale-105'
                                        : 'border-slate-200 opacity-80 hover:opacity-100'
                                        }`}
                                >
                                    <img src={product.images[0]} alt="" className="w-full h-full object-cover opacity-50" />
                                    <PlayCircle className="w-8 h-8 text-amber-400 absolute z-10 drop-shadow-md" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Right Grid: Info & Call-To-Actions (7 cols) */}
                    <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                        <div>
                            {/* Category & Social Proof */}
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                                    {product.category}
                                </span>
                                <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                                    <Eye className="w-3.5 h-3.5 text-slate-600" />
                                    <span>২৮ জন এটি দেখছেন</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 leading-snug">
                                {product.title}
                            </h1>

                            {/* Dynamic Rating and Reviews Link */}
                            <div className="flex items-center gap-3 mt-3">
                                <button onClick={scrollToReviews} className="flex text-amber-400 hover:opacity-80 transition-opacity">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                                    ))}
                                </button>
                                <span className="text-sm font-bold text-slate-800">{product.rating}</span>
                                <span className="text-slate-300">|</span>
                                <button
                                    onClick={scrollToReviews}
                                    className="text-xs font-semibold text-amber-600 hover:text-amber-700 underline flex items-center gap-1"
                                >
                                    <MessageSquare className="w-3.5 h-3.5" />
                                    {product.reviewsCount} টি কাস্টমার রিভিউ দেখুন
                                </button>
                            </div>

                            {/* Price Section */}
                            <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-baseline justify-between">
                                <div className="flex items-baseline gap-3">
                                    <span className="text-3xl font-black text-slate-900">
                                        ৳{(selectedVariant.price * quantity).toLocaleString('bn-BD')}
                                    </span>
                                    {selectedVariant.originalPrice && (
                                        <span className="text-base font-medium text-slate-400 line-through">
                                            ৳{(selectedVariant.originalPrice * quantity).toLocaleString('bn-BD')}
                                        </span>
                                    )}
                                </div>
                                <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full border border-emerald-200">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> ইন স্টক
                                </span>
                            </div>

                            {/* Variant Selector */}
                            <div className="mt-6 space-y-3">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="font-bold text-slate-700 uppercase tracking-wider">
                                        বোতলের সাইজ: <span className="text-amber-600">{selectedVariant.size}</span>
                                    </span>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    {product.variants.map((variant, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedVariant(variant)}
                                            className={`py-2.5 px-3 text-xs font-bold rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-1 relative ${selectedVariant.size === variant.size
                                                ? 'border-amber-500 bg-amber-500/10 text-amber-900 shadow-sm'
                                                : 'border-slate-200 text-slate-600 hover:border-slate-300 bg-white'
                                                }`}
                                        >
                                            <span>{variant.size}</span>
                                            <span className="text-[10px] text-slate-400 font-normal">৳{variant.price}</span>
                                            {selectedVariant.size === variant.size && (
                                                <div className="absolute -top-1.5 -right-1.5 bg-amber-500 text-white rounded-full p-0.5">
                                                    <Check className="w-3 h-3" />
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity Selector */}
                            <div className="mt-6 flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">পরিমাণ:</span>
                                <div className="flex items-center border border-slate-300 rounded-xl bg-slate-50 overflow-hidden shadow-sm">
                                    <button
                                        onClick={() => handleQuantity('dec')}
                                        className="p-3 text-slate-600 hover:bg-slate-200 transition-colors"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="px-5 text-sm font-bold text-slate-900">{quantity}</span>
                                    <button
                                        onClick={() => handleQuantity('inc')}
                                        className="p-3 text-slate-600 hover:bg-slate-200 transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3 pt-4 border-t border-slate-100">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold py-3.5 px-6 rounded-xl transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 active:scale-95"
                                >
                                    <ShoppingBag className="w-4 h-4" />
                                    <span>কার্টে যোগ করুন</span>
                                </button>
                                <button
                                    onClick={() => {
                                        handleAddToCart();
                                        navigate('/cart');
                                    }}
                                    className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold py-3.5 px-6 rounded-xl transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95"
                                >
                                    <Zap className="w-4 h-4 fill-slate-950" />
                                    <span>সরাসরি অর্ডার করুন</span>
                                </button>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-3 gap-2 pt-4 text-[11px] text-slate-600 border-t border-slate-100 text-center">
                                <div className="flex flex-col items-center gap-1 p-2 bg-slate-50 rounded-lg">
                                    <Truck className="w-5 h-5 text-amber-600" />
                                    <span className="font-semibold">দ্রুত ডেলিভারি</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 p-2 bg-slate-50 rounded-lg">
                                    <ShieldCheck className="w-5 h-5 text-amber-600" />
                                    <span className="font-semibold">১০০% আসল পণ্য</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 p-2 bg-slate-50 rounded-lg">
                                    <RotateCcw className="w-5 h-5 text-amber-600" />
                                    <span className="font-semibold">সহজ রিটার্ন</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Section: Dynamic Content Tabs & Reviews */}
                <div id="reviews-section" className="mt-10 bg-white rounded-2xl border border-slate-200/80 shadow-xl overflow-hidden scroll-mt-6">
                    {/* Tab Navigation Header */}
                    <div className="flex border-b border-slate-200 bg-slate-50/50 overflow-x-auto">
                        <button
                            onClick={() => setActiveTab('description')}
                            className={`px-6 py-4 text-xs font-extrabold uppercase tracking-wider transition-all border-b-2 flex items-center gap-2 ${activeTab === 'description'
                                ? 'border-amber-500 text-amber-600 bg-white shadow-sm'
                                : 'border-transparent text-slate-500 hover:text-slate-800'
                                }`}
                        >
                            বিবরণ (Description)
                        </button>
                        <button
                            onClick={() => setActiveTab('scent')}
                            className={`px-6 py-4 text-xs font-extrabold uppercase tracking-wider transition-all border-b-2 flex items-center gap-2 ${activeTab === 'scent'
                                ? 'border-amber-500 text-amber-600 bg-white shadow-sm'
                                : 'border-transparent text-slate-500 hover:text-slate-800'
                                }`}
                        >
                            <Sparkles className="w-4 h-4" /> ফ্র্যাগ্রেন্স নোটস
                        </button>
                        <button
                            onClick={() => setActiveTab('specs')}
                            className={`px-6 py-4 text-xs font-extrabold uppercase tracking-wider transition-all border-b-2 flex items-center gap-2 ${activeTab === 'specs'
                                ? 'border-amber-500 text-amber-600 bg-white shadow-sm'
                                : 'border-transparent text-slate-500 hover:text-slate-800'
                                }`}
                        >
                            স্পেসিফিকেশন
                        </button>
                        <button
                            onClick={() => setActiveTab('reviews')}
                            className={`px-6 py-4 text-xs font-extrabold uppercase tracking-wider transition-all border-b-2 flex items-center gap-2 ${activeTab === 'reviews'
                                ? 'border-amber-500 text-amber-600 bg-white shadow-sm'
                                : 'border-transparent text-slate-500 hover:text-slate-800'
                                }`}
                        >
                            <MessageSquare className="w-4 h-4" /> কাস্টমার রিভিউ ({product.reviewsCount})
                        </button>
                    </div>

                    {/* Tab Content Body */}
                    <div className="p-6 lg:p-8 text-sm text-slate-600 leading-relaxed">
                        {activeTab === 'description' && (
                            <div className="max-w-3xl space-y-4">
                                <p className="text-base text-slate-700 leading-7">{product.description}</p>
                                <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200/60 text-xs text-amber-900">
                                    <strong>বিশেষ দ্রষ্টব্য:</strong> কাপড়ে ব্যবহারের ক্ষেত্রে কালারলেস ফেব্রিক নির্বাচন করার পরামর্শ দেওয়া হচ্ছে।
                                </div>
                            </div>
                        )}

                        {activeTab === 'scent' && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
                                <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200/60 text-center">
                                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600">Top Notes</span>
                                    <h4 className="font-bold text-slate-800 mt-1">প্রথম সুবাস</h4>
                                    <p className="text-xs text-slate-600 mt-2 font-medium">{product.scentNotes.top}</p>
                                </div>
                                <div className="p-5 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl border border-amber-200/60 text-center">
                                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-700">Heart Notes</span>
                                    <h4 className="font-bold text-slate-800 mt-1">মূল সুবাস</h4>
                                    <p className="text-xs text-slate-600 mt-2 font-medium">{product.scentNotes.heart}</p>
                                </div>
                                <div className="p-5 bg-gradient-to-br from-slate-100 to-slate-200/60 rounded-2xl border border-slate-300/60 text-center">
                                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-600">Base Notes</span>
                                    <h4 className="font-bold text-slate-800 mt-1">স্থায়ী সুবাস</h4>
                                    <p className="text-xs text-slate-600 mt-2 font-medium">{product.scentNotes.base}</p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'specs' && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                                {product.specifications.map((spec, idx) => (
                                    <div key={idx} className="flex justify-between items-center p-3.5 bg-slate-50 rounded-xl border border-slate-200/60">
                                        <span className="font-bold text-slate-800 text-xs">{spec.label}</span>
                                        <span className="text-xs text-slate-600">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Customer Reviews Tab */}
                        {activeTab === 'reviews' && (
                            <div className="space-y-8">
                                {/* Rating Summary & Breakdowns */}
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200/80 items-center">
                                    {/* Score */}
                                    <div className="md:col-span-4 text-center md:border-r border-slate-200 pr-0 md:pr-6">
                                        <h3 className="text-5xl font-black text-slate-900">{product.rating}</h3>
                                        <div className="flex justify-center text-amber-400 my-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-amber-400" />
                                            ))}
                                        </div>
                                        <p className="text-xs font-semibold text-slate-500">
                                            মোট {product.reviewsCount} টি কাস্টমার রিভিউ এর ভিত্তিতে
                                        </p>
                                    </div>

                                    {/* Progress Bars */}
                                    <div className="md:col-span-8 space-y-2">
                                        {[
                                            { star: 5, count: 110, percentage: '85%' },
                                            { star: 4, count: 12, percentage: '10%' },
                                            { star: 3, count: 4, percentage: '3%' },
                                            { star: 2, count: 2, percentage: '2%' },
                                            { star: 1, count: 0, percentage: '0%' },
                                        ].map((item) => (
                                            <div key={item.star} className="flex items-center gap-3 text-xs">
                                                <span className="w-8 font-bold text-slate-700 flex items-center gap-1">
                                                    {item.star} <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                                </span>
                                                <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                                                    <div className="bg-amber-500 h-full rounded-full" style={{ width: item.percentage }}></div>
                                                </div>
                                                <span className="w-8 text-right text-slate-500 font-medium">{item.count}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Review Item List */}
                                <div className="space-y-4">
                                    <h4 className="text-base font-bold text-slate-900">সাম্প্রতিক কাস্টমার মতামত</h4>

                                    <div className="divide-y divide-slate-100">
                                        {reviews.map((rev) => (
                                            <div key={rev.id} className="py-5 space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-9 h-9 rounded-full bg-amber-500/10 text-amber-700 font-bold flex items-center justify-center text-sm border border-amber-200">
                                                            {rev.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center gap-1.5">
                                                                <h5 className="font-bold text-slate-900 text-sm">{rev.name}</h5>
                                                                {rev.verified && (
                                                                    <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                                                        <UserCheck className="w-3 h-3" /> ভেরিফাইড ক্রেতা
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <span className="text-[11px] text-slate-400">{rev.date}</span>
                                                        </div>
                                                    </div>

                                                    {/* Rating Stars */}
                                                    <div className="flex text-amber-400">
                                                        {[...Array(rev.rating)].map((_, i) => (
                                                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                                                        ))}
                                                    </div>
                                                </div>

                                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-11">
                                                    {rev.comment}
                                                </p>

                                                <div className="pl-11 pt-1 flex items-center gap-4">
                                                    <button className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-amber-600 transition-colors">
                                                        <ThumbsUp className="w-3.5 h-3.5" />
                                                        <span>উপকারী ({rev.likes})</span>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {/* Cart Success Modal Component */}
            <CartSuccessModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};