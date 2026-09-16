import React from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Download, TrendingUp } from 'lucide-react';

export const SalesReportPage = () => {
    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Header Banner */}
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-xl font-black text-slate-900 tracking-tight">সেলস এনালাইসিস & রিপোর্ট</h1>
                        <p className="text-xs text-slate-500 mt-1">রেভিনিউ, নিট প্রফিট এবং সেলস গ্রোথ ট্র্যাক করুন</p>
                    </div>
                    <button className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/60 px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs">
                        <Download className="w-4 h-4 text-emerald-600" /> ডাউনলোড CSV
                    </button>
                </div>

                {/* Stats Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">গ্রস সেলস (Gross Sales)</p>
                        <h2 className="text-2xl font-black text-slate-900 mt-1">৳৮,৫০,০০০</h2>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">নিট প্রফিট (Net Profit)</p>
                        <h2 className="text-2xl font-black text-emerald-600 mt-1">৳২,১০,০০০</h2>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">এভারেজ অর্ডার ভ্যালু (AOV)</p>
                        <h2 className="text-2xl font-black text-amber-600 mt-1">৳৩,৪০০</h2>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};