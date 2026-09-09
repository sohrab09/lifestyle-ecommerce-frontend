import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MapPin,
    Phone,
    Mail,
    Send,
    ShieldCheck,
    Truck,
    RotateCcw,
    CreditCard
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            alert('আপনার সাবস্ক্রিপশন সফল হয়েছে!');
            setEmail('');
        }
    };

    return (
        <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 font-sans text-xs sm:text-sm">

            {/* 1. Top Feature Highlights (Premium Trust Badges) */}
            <div className="border-b border-slate-800 bg-slate-950/50 py-6">
                <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-40">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center gap-3">
                            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
                                <Truck className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wider">দ্রুত ডেলিভারি</h4>
                                <p className="text-[11px] text-slate-400">সারা বাংলাদেশে ক্যাশ অন ডেলিভারি</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-3">
                            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wider">১০০% অরজিনাল</h4>
                                <p className="text-[11px] text-slate-400">প্রিমিয়াম কোয়ালিটি গ্যারান্টি</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-3">
                            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
                                <RotateCcw className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wider">সহজ রিফান্ড পলিসি</h4>
                                <p className="text-[11px] text-slate-400">৭ দিনের মধ্যে রিটার্ন সুবিধা</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-3">
                            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
                                <CreditCard className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wider">নিরাপদ পেমেন্ট</h4>
                                <p className="text-[11px] text-slate-400">বিকাশ, নগদ ও কার্ড পেমেন্ট</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Main Footer Content */}
            <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-40 py-12 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">

                    {/* Column 1: Brand & Info */}
                    <div className="space-y-4 lg:col-span-1">
                        <Link to="/" className="inline-block text-2xl font-black text-white tracking-tight">
                            Shafi <span className="text-emerald-500">Hat</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed text-xs">
                            শাফি হাট হলো বাংলাদেশের একটি নির্ভরযোগ্য অনলাইন শপ। আমরা সরবরাহ করি খাঁটি প্রিমিয়াম আতর, ইসলামিক ও একাডেমিক বই এবং ট্রেন্ডিং হোম-ডেকোর আইটেম।
                        </p>

                        {/* Social Icons (react-icons/fa) */}
                        <div className="flex items-center gap-2 pt-2">
                            <a href="#" className="p-2.5 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white transition-all text-slate-300 border border-slate-700/60" aria-label="Facebook">
                                <FaFacebookF className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-2.5 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white transition-all text-slate-300 border border-slate-700/60" aria-label="Instagram">
                                <FaInstagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-2.5 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white transition-all text-slate-300 border border-slate-700/60" aria-label="Youtube">
                                <FaYoutube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: প্রয়োজনীয় লিংক */}
                    <div className="space-y-3">
                        <h3 className="font-bold text-white text-xs uppercase tracking-widest border-l-2 border-emerald-500 pl-2">
                            প্রয়োজনীয় লিংক
                        </h3>
                        <ul className="space-y-2 text-xs text-slate-400">
                            <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">যোগাযোগ করুন</Link></li>
                            <li><Link to="/cart" className="hover:text-emerald-400 transition-colors">শপিং ব্যাগ</Link></li>
                            <li><Link to="/faq" className="hover:text-emerald-400 transition-colors">প্রশ্নোত্তর (FAQ)</Link></li>
                            <li><Link to="/how-to-buy" className="hover:text-emerald-400 transition-colors">কিভাবে কেনাকাটা করবেন?</Link></li>
                            <li><Link to="/career" className="hover:text-emerald-400 transition-colors">ক্যারিয়ার</Link></li>
                            <li><Link to="/terms" className="hover:text-emerald-400 transition-colors">শর্তাবলী</Link></li>
                            <li><Link to="/refund-policy" className="hover:text-emerald-400 transition-colors">রিফান্ড নীতিমালা</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">প্রাইভেসি পলিসি</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: জনপ্রিয় ক্যাটালগ */}
                    <div className="space-y-3">
                        <h3 className="font-bold text-white text-xs uppercase tracking-widest border-l-2 border-emerald-500 pl-2">
                            জনপ্রিয় ক্যাটালগ
                        </h3>
                        <ul className="space-y-2 text-xs text-slate-400">
                            <li><Link to="/wishlist" className="hover:text-emerald-400 transition-colors">পছন্দের তালিকা</Link></li>
                            <li><Link to="/products?category=attar" className="hover:text-emerald-400 transition-colors">প্রিমিয়াম আতর কালেকশন</Link></li>
                            <li><Link to="/products?cat=general" className="hover:text-emerald-400 transition-colors">জেনারেল ও ইসলামিক বই</Link></li>
                            <li><Link to="/author/abdullah-jahangir" className="hover:text-emerald-400 transition-colors">ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর</Link></li>
                            <li><Link to="/author/arif-azad" className="hover:text-emerald-400 transition-colors">আরিফ আজাদ এর বই</Link></li>
                            <li><Link to="/pre-order" className="hover:text-emerald-400 transition-colors">প্রি-অর্ডার আইটেম</Link></li>
                            <li><Link to="/packages" className="hover:text-emerald-400 transition-colors">বিশেষ কম্বো প্যাকেজ</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: যোগাযোগ */}
                    <div className="space-y-3">
                        <h3 className="font-bold text-white text-xs uppercase tracking-widest border-l-2 border-emerald-500 pl-2">
                            যোগাযোগ
                        </h3>
                        <ul className="space-y-3 text-xs text-slate-400">
                            <li className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span className="leading-relaxed">House 310, Road 21, Mohakhali DOHS, Dhaka 1206, Bangladesh</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                                <a href="tel:09678771365" className="hover:text-emerald-400 transition-colors font-medium">096-7877-1365</a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                                <a href="mailto:sales@shafihat.com" className="hover:text-emerald-400 transition-colors">sales@shafihat.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5: Subscribe Newsletter */}
                    <div className="space-y-3">
                        <h3 className="font-bold text-white text-xs uppercase tracking-widest border-l-2 border-emerald-500 pl-2">
                            নিউজলেটার
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            বিশেষ অফার এবং নতুন আতর/বইয়ের আপডেট পেতে আপনার ইমেইল দিয়ে সাবস্ক্রাইব করুন।
                        </p>
                        <form onSubmit={handleSubscribe} className="space-y-2">
                            <div className="relative flex items-center">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="আপনার ইমেইল ঠিকানা"
                                    className="w-full pl-3 pr-10 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-xs focus:outline-none focus:border-emerald-500 text-white placeholder-slate-500 transition-colors"
                                />
                                <button
                                    type="submit"
                                    aria-label="Subscribe"
                                    className="absolute right-1.5 p-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md transition-colors"
                                >
                                    <Send className="w-3.5 h-3.5" />
                                </button>
                            </div>
                            <span className="text-[10px] text-slate-500 block">আমরা কোনো স্প্যাম ইমেইল পাঠাই না।</span>
                        </form>
                    </div>

                </div>
            </div>

            {/* 3. Bottom Bar: Copyright & Payment Badges */}
            <div className="border-t border-slate-800/80 bg-slate-950 py-5">
                <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                    <p className="text-center sm:text-left">
                        © Copyright 2026 <span className="text-emerald-400 font-semibold">Shafi Hat</span>. All rights reserved.
                    </p>

                    {/* Payment Gateways */}
                    <div className="flex items-center gap-3 bg-slate-900 px-4 py-1.5 rounded-full border border-slate-800">
                        <span className="text-[10px] uppercase text-slate-500 font-bold mr-1">We Accept:</span>
                        <span className="font-semibold text-[11px] text-slate-200 tracking-tight">Mastercard</span>
                        <span className="font-extrabold text-blue-400 tracking-wider">VISA</span>
                        <span className="font-bold text-pink-500">bKash</span>
                        <span className="font-bold text-orange-500">Nagad</span>
                    </div>
                </div>
            </div>

        </footer>
    );
};