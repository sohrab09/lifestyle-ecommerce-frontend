import React from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { DollarSign, ShoppingBag, Users, AlertTriangle, TrendingUp } from 'lucide-react';

export const AdminDashboardPage = () => {
    const stats = [
        { title: 'মোট সেলস', value: '৳২,৪৫,০০০', change: '+১২.৫%', icon: DollarSign },
        { title: 'লাইভ অর্ডার', value: '৩৮ টি', change: '+৮.২%', icon: ShoppingBag },
        { title: 'মোট কাস্টমার', value: '১,৮৪০ জন', change: '+১৫.৪%', icon: Users },
        { title: 'লো-স্টক অ্যালার্ট', value: '০৫ টি', change: 'স্টক আউট ঝুঁকি', icon: AlertTriangle, isAlert: true },
    ];

    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Banner Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div>
                        <h1 className="text-xl font-black text-slate-900 tracking-tight">ড্যাশবোর্ড ওভারভিউ</h1>
                        <p className="text-xs text-slate-500 mt-1">আপনার ই-কমার্স বিজনেসের রিয়েল-টাইম তথ্য</p>
                    </div>
                    <span className="mt-3 sm:mt-0 text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200/60">
                        লাইভ অ্যানালিটিক্স
                    </span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {stats.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
                            >
                                <div className="flex items-center justify-between">
                                    <span className={`p-3.5 rounded-2xl transition-transform group-hover:scale-110 ${item.isAlert ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'
                                        }`}>
                                        <Icon className="w-6 h-6" />
                                    </span>
                                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${item.isAlert ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'
                                        }`}>
                                        <TrendingUp className="w-3 h-3" /> {item.change}
                                    </span>
                                </div>
                                <div className="mt-4">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.title}</p>
                                    <h3 className="text-2xl font-black text-slate-900 mt-1">{item.value}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </AdminLayout>
    );
};