import React from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { UserCheck, ShieldAlert, Plus } from 'lucide-react';

export const UserManagementPage = () => {
    const users = [
        { name: 'শাকিব হাসান', email: 'sakib@gmail.com', role: 'Super Admin', status: 'Active' },
        { name: 'রেজাউল করিম', email: 'reza@gmail.com', role: 'Customer', status: 'Active' },
    ];

    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Header Banner */}
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-xl font-black text-slate-900 tracking-tight">ইউজার & রোলস ম্যানেজমেন্ট</h1>
                        <p className="text-xs text-slate-500 mt-1">কাস্টমার এবং স্টাফের অ্যাক্সেস কন্ট্রোল</p>
                    </div>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs">
                        <Plus className="w-4 h-4" /> নতুন স্টাফ যোগ করুন
                    </button>
                </div>

                {/* Users Table Container */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs text-slate-600">
                            <thead className="bg-slate-50 border-b border-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
                                <tr>
                                    <th className="p-4">নাম</th>
                                    <th className="p-4">ইমেইল</th>
                                    <th className="p-4">রোল (Role)</th>
                                    <th className="p-4">স্ট্যাটাস</th>
                                    <th className="p-4">অ্যাকশন</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {users.map((u, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="p-4 font-bold text-slate-900">{u.name}</td>
                                        <td className="p-4 font-medium text-slate-500">{u.email}</td>
                                        <td className="p-4">
                                            <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border ${u.role === 'Super Admin'
                                                ? 'bg-purple-50 text-purple-700 border-purple-200'
                                                : 'bg-slate-100 text-slate-700 border-slate-200'
                                                }`}>
                                                {u.role}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center gap-1.5 text-emerald-600 font-bold">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                {u.status}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <button className="text-xs font-bold text-slate-500 hover:text-emerald-600 hover:underline cursor-pointer">
                                                এডিট
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