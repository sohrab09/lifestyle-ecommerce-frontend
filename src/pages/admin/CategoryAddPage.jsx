import React from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Upload, PlusCircle } from 'lucide-react';

export const CategoryAddPage = () => {
    return (
        <AdminLayout>
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Banner Header */}
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <h1 className="text-xl font-black text-slate-900 tracking-tight">নতুন ক্যাটাগরি যোগ করুন</h1>
                    <p className="text-xs text-slate-500 mt-1">প্রোডাক্ট ফিল্টারিং সুবিধার জন্য নতুন ক্যাটাগরি প্যানেল তৈরি করুন</p>
                </div>

                {/* Category Form */}
                <form className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs text-slate-700 font-bold mb-2">ক্যাটাগরির নাম</label>
                            <input
                                type="text"
                                placeholder="যেমন: Lux Attar"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-slate-700 font-bold mb-2">ক্যাটাগরি স্লাগ (Slug)</label>
                            <input
                                type="text"
                                placeholder="lux-attar"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs text-slate-700 font-bold mb-2">প্যারেন্ট ক্যাটাগরি</label>
                        <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all">
                            <option value="">মেইন ক্যাটাগরি (None)</option>
                            <option value="perfumes">Perfumes</option>
                            <option value="home-decor">Home Decor</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs text-slate-700 font-bold mb-2">ক্যাটাগরি ব্যানার/ইমেজ</label>
                        <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:border-emerald-500/60 hover:bg-emerald-50/30 cursor-pointer transition-all bg-slate-50/50 group">
                            <Upload className="w-8 h-8 text-slate-400 group-hover:text-emerald-600 mx-auto mb-2 transition-colors" />
                            <p className="text-xs font-semibold text-slate-500 group-hover:text-slate-700">ছবি ড্র্যাগ করুন অথবা আপলোড করতে ক্লিক করুন</p>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
                    >
                        <PlusCircle className="w-4 h-4" /> ক্যাটাগরি সেভ করুন
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
};