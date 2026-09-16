import React from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';

export const StockManagementPage = () => {
    const stockItems = [
        { name: 'Dehn Al Oudh (12ml)', sku: 'ATT-001', stock: 4, status: 'Low Stock' },
        { name: 'Ceramic Flower Vase', sku: 'DEC-042', stock: 28, status: 'In Stock' },
    ];

    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Header Banner */}
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <h1 className="text-xl font-black text-slate-900 tracking-tight">ইনভেন্টরি & স্টক কন্ট্রোল</h1>
                    <p className="text-xs text-slate-500 mt-1">স্টক এভেলেবিলিটি ও অ্যালার্ট ম্যানেজ করুন</p>
                </div>

                {/* Stock Table Container */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs text-slate-600">
                            <thead className="bg-slate-50 border-b border-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
                                <tr>
                                    <th className="p-4">প্রোডাক্ট</th>
                                    <th className="p-4">SKU Code</th>
                                    <th className="p-4">বর্তমান স্টক</th>
                                    <th className="p-4">অবস্থা</th>
                                    <th className="p-4">কুইক আপডেট</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {stockItems.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="p-4 font-bold text-slate-900">{item.name}</td>
                                        <td className="p-4 font-medium text-slate-500">{item.sku}</td>
                                        <td className="p-4 font-black text-slate-900">{item.stock} টি</td>
                                        <td className="p-4">
                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${item.status === 'Low Stock'
                                                ? 'bg-rose-50 text-rose-700 border-rose-200'
                                                : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                                }`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <input
                                                type="number"
                                                defaultValue={item.stock}
                                                className="w-16 bg-slate-50 border border-slate-200 p-1.5 rounded-lg text-center font-bold text-slate-800 outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                                            />
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