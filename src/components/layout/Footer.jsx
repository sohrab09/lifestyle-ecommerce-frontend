import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Send } from 'lucide-react';

export const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            alert('আপনার সাবস্ক্রিপশন সফল হয়েছে!');
            setEmail('');
        }
    };

    return (
        <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs sm:text-sm">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

                    {/* Column 1: Brand & Info */}
                    <div className="space-y-3 lg:col-span-1">
                        <Link to="/" className="inline-block text-2xl font-bold text-red-600 tracking-tight">
                            WafiLife
                        </Link>
                        <p className="text-slate-500 leading-relaxed text-xs">
                            Wafilife is a leading book shop in Bangladesh. We offer thousands of islamic, general and academic books at a discounted price. We provide good packaging with low shipping cost all over the Bangladesh.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-2 pt-2">
                            <a href="#" className="p-1.5 rounded-full bg-slate-100 hover:bg-red-600 hover:text-white transition-colors text-slate-600">
                                {/* <Facebook className="w-4 h-4" /> */}
                            </a>
                            <a href="#" className="p-1.5 rounded-full bg-slate-100 hover:bg-red-600 hover:text-white transition-colors text-slate-600">
                                {/* <Instagram className="w-4 h-4" /> */}
                            </a>
                            <a href="#" className="p-1.5 rounded-full bg-slate-100 hover:bg-red-600 hover:text-white transition-colors text-slate-600">
                                {/* <Youtube className="w-4 h-4" /> */}
                            </a>
                        </div>
                    </div>

                    {/* Column 2: প্রয়োজনীয় লিংক */}
                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">প্রয়োজনীয় লিংক</h3>
                        <ul className="space-y-1.5 text-xs">
                            <li><Link to="/contact" className="hover:text-red-600 transition-colors">যোগাযোগ করুন</Link></li>
                            <li><Link to="/cart" className="hover:text-red-600 transition-colors">শপিং ব্যাগ</Link></li>
                            <li><Link to="/faq" className="hover:text-red-600 transition-colors">প্রশ্নোত্তর</Link></li>
                            <li><Link to="/how-to-buy" className="hover:text-red-600 transition-colors">কিভাবে কেনাকাটা করবেন ?</Link></li>
                            <li><Link to="/career" className="hover:text-red-600 transition-colors">ক্যারিয়ার</Link></li>
                            <li><Link to="/terms" className="hover:text-red-600 transition-colors">শর্তাবলী</Link></li>
                            <li><Link to="/refund-policy" className="hover:text-red-600 transition-colors">রিফান্ড নীতিমালা</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-red-600 transition-colors">প্রাইভেসি পলিসি</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: জনপ্রিয় */}
                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">জনপ্রিয়</h3>
                        <ul className="space-y-1.5 text-xs">
                            <li><Link to="/wishlist" className="hover:text-red-600 transition-colors">আপনার পছন্দের তালিকা</Link></li>
                            <li><Link to="/products?cat=general" className="hover:text-red-600 transition-colors">জেনারেল ও একাডেমিক বই</Link></li>
                            <li><Link to="/author/abdullah-jahangir" className="hover:text-red-600 transition-colors">ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর এর বই</Link></li>
                            <li><Link to="/author/arif-azad" className="hover:text-red-600 transition-colors">আরিফ আজাদ এর বই</Link></li>
                            <li><Link to="/pre-order" className="hover:text-red-600 transition-colors">প্রি-অর্ডার</Link></li>
                            <li><Link to="/packages" className="hover:text-red-600 transition-colors">প্যাকেজ</Link></li>
                            <li><Link to="/electronics" className="hover:text-red-600 transition-colors">ইলেক্ট্রনিক্স</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: যোগাযোগ */}
                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">যোগাযোগ</h3>
                        <ul className="space-y-2.5 text-xs text-slate-600">
                            <li className="flex items-start gap-2">
                                {/* <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" /> */}
                                <span>Head Office: House 310, Road 21 Mohakhali DOHS, Dhaka 1206</span>
                            </li>
                            <li className="flex items-center gap-2">
                                {/* <Phone className="w-4 h-4 text-slate-400 shrink-0" /> */}
                                <a href="tel:09678771365" className="hover:text-red-600 transition-colors">096-7877-1365</a>
                            </li>
                            <li className="flex items-center gap-2">
                                {/* <Mail className="w-4 h-4 text-slate-400 shrink-0" /> */}
                                <a href="mailto:sales@wafilife.com" className="hover:text-red-600 transition-colors">sales@wafilife.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5: Subscribe Now */}
                    <div className="space-y-2">
                        <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">Subscribe Now</h3>
                        <p className="text-xs text-slate-500 leading-relaxed mb-3">
                            Subscribe your email for newsletter and featured news based on your interest
                        </p>
                        <form onSubmit={handleSubscribe} className="relative flex items-center">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Write your email here"
                                className="w-full pl-3 pr-10 py-2 border border-slate-200 rounded-md text-xs focus:outline-none focus:border-emerald-500 text-slate-700 placeholder-slate-400"
                            />
                            <button
                                type="submit"
                                aria-label="Subscribe"
                                className="absolute right-2 text-emerald-600 hover:text-emerald-700 transition-colors p-1"
                            >
                                {/* <Send className="w-4 h-4" /> */}
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Bottom Bar: Copyright & Payment Gateways */}
            <div className="border-t border-slate-100 bg-slate-50/50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© Copyright 2026 Wafi Solutions. All rights reserved.</p>

                    {/* Payment Badges */}
                    <div className="flex items-center gap-3">
                        <span className="font-semibold text-[10px] uppercase text-slate-400">Mastercard</span>
                        <span className="font-extrabold text-blue-800 tracking-wider">VISA</span>
                        <span className="font-bold text-pink-600">bKash</span>
                        <span className="font-bold text-orange-600">nagad</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};