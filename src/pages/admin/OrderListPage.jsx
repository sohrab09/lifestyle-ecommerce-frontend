import React from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';

export const OrderListPage = () => {
    const orders = [
        { id: '#ORD-9821', customer: 'আরিফ রহমান', date: 'Sep 16, 2026', payment: 'bKash (Paid)', status: 'Processing', total: '৳১৫,৫০০' },
        { id: '#ORD-9822', customer: 'তানজিনা আহমেদ', date: 'Sep 16, 2026', payment: 'COD', status: 'Pending', total: '৳৮,২০০' },
    ];

    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Header Banner */}
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <h1 className="text-xl font-black text-slate-900 tracking-tight">অর্ডার লিস্ট</h1>
                    <p className="text-xs text-slate-500 mt-1">সব কাস্টমার অর্ডারের স্ট্যাটাস দেখুন ও প্রসেস করুন</p>
                </div>

                {/* Orders Table Container */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs text-slate-600">
                            <thead className="bg-slate-50 border-b border-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
                                <tr>
                                    <th className="p-4">অর্ডার আইডি</th>
                                    <th className="p-4">কাস্টমার</th>
                                    <th className="p-4">তারিখ</th>
                                    <th className="p-4">পেমেন্ট</th>
                                    <th className="p-4">স্ট্যাটাস</th>
                                    <th className="p-4">মোট</th>
                                    <th className="p-4">অ্যাকশন</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {orders.map((ord) => (
                                    <tr key={ord.id} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="p-4 font-bold text-slate-900">{ord.id}</td>
                                        <td className="p-4 font-medium text-slate-800">{ord.customer}</td>
                                        <td className="p-4 text-slate-500">{ord.date}</td>
                                        <td className="p-4 font-medium text-slate-700">{ord.payment}</td>
                                        <td className="p-4">
                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${ord.status === 'Processing'
                                                ? 'bg-blue-50 text-blue-700 border-blue-200'
                                                : 'bg-amber-50 text-amber-700 border-amber-200'
                                                }`}>
                                                {ord.status}
                                            </span>
                                        </td>
                                        <td className="p-4 font-extrabold text-emerald-700">{ord.total}</td>
                                        <td className="p-4">
                                            <button className="text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:underline cursor-pointer">
                                                ভিউ ডিটেইলস
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};