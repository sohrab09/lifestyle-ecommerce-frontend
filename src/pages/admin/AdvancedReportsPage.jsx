import React from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { BarChart3, PieChart } from 'lucide-react';

export const AdvancedReportsPage = () => {
    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Header Banner */}
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <h1 className="text-xl font-black text-slate-900 tracking-tight">অ্যাডভান্সড বিজনেস রিপোর্টস</h1>
                    <p className="text-xs text-slate-500 mt-1">কাস্টমার বিহেভিয়ার এবং চ্যানেল পারফরম্যান্স বিশ্লেষণ</p>
                </div>

                {/* Analytics Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Traffic Source Card */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 mb-4">
                            <BarChart3 className="w-4 h-4 text-emerald-600" /> ট্রাফিক সোর্স
                        </h2>
                        <div className="space-y-4 text-xs">
                            <div>
                                <div className="flex justify-between text-slate-700 font-bold mb-1.5">
                                    <span>Direct Search</span>
                                    <span className="text-emerald-600">45%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-emerald-600 h-full rounded-full" style={{ width: '45%' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-slate-700 font-bold mb-1.5">
                                    <span>Social Media (FB/Insta)</span>
                                    <span className="text-emerald-600">35%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '35%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Top Selling Category Card */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 mb-4">
                            <PieChart className="w-4 h-4 text-emerald-600" /> টপ সেলিং ক্যাটাগরি
                        </h2>
                        <div className="space-y-4 text-xs">
                            <div>
                                <div className="flex justify-between text-slate-700 font-bold mb-1.5">
                                    <span>Attar & Perfume</span>
                                    <span className="text-amber-600">60%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-amber-500 h-full rounded-full" style={{ width: '60%' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-slate-700 font-bold mb-1.5">
                                    <span>Home Decor</span>
                                    <span className="text-amber-600">25%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-amber-400 h-full rounded-full" style={{ width: '25%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};