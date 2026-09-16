import React from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { PackagePlus, ImagePlus } from 'lucide-react';

export const ProductAddPage = () => {
    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Header Banner */}
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-black text-slate-900 tracking-tight">নতুন প্রোডাক্ট যুক্ত করুন</h1>
                        <p className="text-xs text-slate-500 mt-1">ইনভেন্টরিতে নতুন আইটেম যুক্ত করুন</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Info Card */}
                    <div className="lg:col-span-2 space-y-5 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <div>
                            <label className="block text-xs text-slate-700 font-bold mb-2">প্রোডাক্টের নাম</label>
                            <input
                                type="text"
                                placeholder="যেমন: Premium Amber Perfume 100ml"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs text-slate-700 font-bold mb-2">রেগুলার প্রাইস (৳)</label>
                                <input
                                    type="number"
                                    placeholder="3500"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-slate-700 font-bold mb-2">ডিসকাউন্ট প্রাইস (৳)</label>
                                <input
                                    type="number"
                                    placeholder="2800"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs text-slate-700 font-bold mb-2">বিস্তারিত বিবরন</label>
                            <textarea
                                rows="5"
                                placeholder="প্রোডাক্টের বিস্তারিত বিবরন লিখুন..."
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                            ></textarea>
                        </div>
                    </div>

                    {/* Media & Meta Card */}
                    <div className="space-y-5 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-fit">
                        <div>
                            <label className="block text-xs text-slate-700 font-bold mb-2">প্রোডাক্ট গ্যালারি</label>
                            <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-emerald-500 hover:bg-emerald-50/30 cursor-pointer bg-slate-50 transition-all">
                                <ImagePlus className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                                <p className="text-[11px] font-bold text-slate-600">ইমেজ আপলোড করুন</p>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs text-slate-700 font-bold mb-2">স্টক পরিমাণ</label>
                            <input
                                type="number"
                                placeholder="50"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                            />
                        </div>

                        <button
                            type="button"
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs mt-4"
                        >
                            <PackagePlus className="w-4 h-4" /> প্রোডাক্ট পাবলিশ করুন
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};