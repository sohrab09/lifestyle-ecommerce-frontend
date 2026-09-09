import React, { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import {
    Users, Package, Tags, ShoppingBag, Plus, Search,
    Filter, MoreVertical, Edit, Trash2, Eye, ShieldCheck
} from 'lucide-react';

export const AdminDashboardPage = () => {
    const [activeTab, setActiveTab] = useState('overview'); // tabs: overview, products, users, categories
    const [showAddProductModal, setShowAddProductModal] = useState(false);

    // ডামি ক্যাটাগরি ডাটা
    const categories = [
        { id: 1, name: 'Attar / Perfume', slug: 'attar-perfume', totalProducts: 24, status: 'Active' },
        { id: 2, name: 'Home Decor Items', slug: 'home-decor', totalProducts: 38, status: 'Active' },
        { id: 3, name: 'Trending Home-Styling', slug: 'home-styling', totalProducts: 15, status: 'Active' },
    ];

    // ডামি প্রোডাক্ট ডাটা
    const [products, setProducts] = useState([
        {
            id: 'PRD-001',
            name: 'Dehn Al Oudh Royale (12ml)',
            category: 'Attar / Perfume',
            price: 2850,
            stock: 18,
            status: 'In Stock',
            image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=100&auto=format&fit=crop&q=80',
        },
        {
            id: 'PRD-002',
            name: 'Handcrafted Ceramic Flower Vase',
            category: 'Home Decor Items',
            price: 1650,
            stock: 5,
            status: 'Low Stock',
            image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=100&auto=format&fit=crop&q=80',
        },
        {
            id: 'PRD-003',
            name: 'Minimalist Nordic Wall Lamp',
            category: 'Trending Home-Styling',
            price: 3400,
            stock: 12,
            status: 'In Stock',
            image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=100&auto=format&fit=crop&q=80',
        },
    ]);

    // ডামি ইউজার ডাটা
    const [users] = useState([
        { id: 'USR-101', name: 'আব্দুল্লাহ আল মামুন', email: 'mamun@example.com', phone: '+8801700000000', role: 'Customer', orders: 5, joined: '12 Jan 2026' },
        { id: 'USR-102', name: 'সাবরিনা সুলতানা', email: 'sabrina@example.com', phone: '+8801800000000', role: 'Customer', orders: 12, joined: '03 Feb 2026' },
        { id: 'USR-103', name: 'তারিকুল ইসলাম', email: 'tanvir@example.com', phone: '+8801900000000', role: 'Admin', orders: 0, joined: '01 Jan 2026' },
    ]);

    return (
        <AdminLayout>
            <div className="space-y-6">

                {/* Top Header & Navigation Tabs */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">অ্যাডমিন ম্যানেজমেন্ট</h1>
                        <p className="text-xs text-slate-500 mt-1">প্রোডাক্ট, ইউজার এবং ক্যাটাগরি নিয়ন্ত্রণ করুন</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setShowAddProductModal(true)}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
                        >
                            <Plus className="w-4 h-4" />
                            <span>নতুন প্রোডাক্ট যোগ করুন</span>
                        </button>
                    </div>
                </div>

                {/* Action Tabs */}
                <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-1">
                    {[
                        { id: 'overview', label: 'ওভারভিউ', icon: ShoppingBag },
                        { id: 'products', label: 'প্রোডাক্টস', icon: Package },
                        { id: 'categories', label: 'ক্যাটাগরি', icon: Tags },
                        { id: 'users', label: 'ইউজার লিস্ট', icon: Users },
                    ].map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-t-lg border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id
                                    ? 'border-emerald-600 text-emerald-600 bg-emerald-50/50'
                                    : 'border-transparent text-slate-500 hover:text-slate-800'
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* --- TAB CONTENT: OVERVIEW --- */}
                {activeTab === 'overview' && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                                    <Package className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">মোট প্রোডাক্ট</p>
                                    <p className="text-xl font-bold text-slate-900">{products.length} টি</p>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                                    <Tags className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">ক্যাটাগরি</p>
                                    <p className="text-xl font-bold text-slate-900">{categories.length} টি</p>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                                <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">রেজিস্টার্ড ইউজার</p>
                                    <p className="text-xl font-bold text-slate-900">{users.length} জন</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- TAB CONTENT: PRODUCTS --- */}
                {(activeTab === 'products' || activeTab === 'overview') && (
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <h2 className="text-base font-bold text-slate-800">প্রোডাক্ট লিস্ট</h2>
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <div className="relative flex-1 sm:w-64">
                                    <input
                                        type="text"
                                        placeholder="প্রোডাক্ট খুঁজুন..."
                                        className="w-full pl-8 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500"
                                    />
                                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                                </div>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs text-slate-600">
                                <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200 uppercase">
                                    <tr>
                                        <th className="p-3">প্রোডাক্ট</th>
                                        <th className="p-3">ক্যাটাগরি</th>
                                        <th className="p-3">মূল্য</th>
                                        <th className="p-3">স্টক</th>
                                        <th className="p-3">স্ট্যাটাস</th>
                                        <th className="p-3 text-right">অ্যাকশন</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {products.map((item) => (
                                        <tr key={item.id} className="hover:bg-slate-50">
                                            <td className="p-3">
                                                <div className="flex items-center gap-3">
                                                    <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded-lg border" />
                                                    <div>
                                                        <p className="font-semibold text-slate-900">{item.name}</p>
                                                        <p className="text-[10px] text-slate-400">{item.id}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-3 font-medium text-slate-700">{item.category}</td>
                                            <td className="p-3 font-bold text-slate-900">৳{item.price.toLocaleString('bn-BD')}</td>
                                            <td className="p-3 font-semibold">{item.stock} টি</td>
                                            <td className="p-3">
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${item.status === 'In Stock' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                                                    }`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="p-3 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button className="p-1 hover:text-emerald-600"><Edit className="w-4 h-4" /></button>
                                                    <button className="p-1 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* --- TAB CONTENT: CATEGORIES --- */}
                {activeTab === 'categories' && (
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="p-4 border-b border-slate-100">
                            <h2 className="text-base font-bold text-slate-800">ক্যাটাগরি লিস্ট</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs text-slate-600">
                                <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200 uppercase">
                                    <tr>
                                        <th className="p-3">ক্যাটাগরির নাম</th>
                                        <th className="p-3">স্লাগ (Slug)</th>
                                        <th className="p-3">মোট প্রোডাক্ট</th>
                                        <th className="p-3">স্ট্যাটাস</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {categories.map((cat) => (
                                        <tr key={cat.id} className="hover:bg-slate-50">
                                            <td className="p-3 font-bold text-slate-800">{cat.name}</td>
                                            <td className="p-3 text-slate-500">{cat.slug}</td>
                                            <td className="p-3 font-semibold text-slate-900">{cat.totalProducts} টি</td>
                                            <td className="p-3">
                                                <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-[10px] font-bold">
                                                    {cat.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* --- TAB CONTENT: USERS --- */}
                {activeTab === 'users' && (
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="p-4 border-b border-slate-100">
                            <h2 className="text-base font-bold text-slate-800">ইউজার তালিকা ({users.length})</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs text-slate-600">
                                <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200 uppercase">
                                    <tr>
                                        <th className="p-3">ইউজার আইডি</th>
                                        <th className="p-3">নাম</th>
                                        <th className="p-3">যোগাযোগ</th>
                                        <th className="p-3">রোল (Role)</th>
                                        <th className="p-3">মোট অর্ডার</th>
                                        <th className="p-3">জয়েনিং তারিখ</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {users.map((u) => (
                                        <tr key={u.id} className="hover:bg-slate-50">
                                            <td className="p-3 font-semibold text-slate-900">{u.id}</td>
                                            <td className="p-3 font-bold text-slate-800">{u.name}</td>
                                            <td className="p-3">
                                                <p>{u.email}</p>
                                                <p className="text-[10px] text-slate-400">{u.phone}</p>
                                            </td>
                                            <td className="p-3">
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${u.role === 'Admin' ? 'bg-purple-100 text-purple-700' : 'bg-slate-100 text-slate-700'
                                                    }`}>
                                                    {u.role}
                                                </span>
                                            </td>
                                            <td className="p-3 font-semibold">{u.orders} টি</td>
                                            <td className="p-3 text-slate-500">{u.joined}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

            </div>

            {/* Add Product Modal Component */}
            {showAddProductModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl max-w-lg w-full p-6 space-y-4 shadow-xl">
                        <div className="flex items-center justify-between pb-2 border-b">
                            <h3 className="text-base font-bold text-slate-800">নতুন প্রোডাক্ট যুক্ত করুন</h3>
                            <button onClick={() => setShowAddProductModal(false)} className="text-slate-400 hover:text-slate-600">✕</button>
                        </div>

                        <form className="space-y-3 text-xs" onSubmit={(e) => { e.preventDefault(); setShowAddProductModal(false); }}>
                            <div>
                                <label className="block text-slate-600 mb-1 font-medium">প্রোডাক্টের নাম</label>
                                <input type="text" className="w-full border rounded-lg p-2 focus:outline-none focus:border-emerald-500" placeholder="উদা: Velvet Royal Attar" required />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-slate-600 mb-1 font-medium">ক্যাটাগরি</label>
                                    <select className="w-full border rounded-lg p-2 focus:outline-none focus:border-emerald-500">
                                        <option>Attar / Perfume</option>
                                        <option>Home Decor Items</option>
                                        <option>Trending Home-Styling</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-slate-600 mb-1 font-medium">মূল্য (৳)</label>
                                    <input type="number" className="w-full border rounded-lg p-2 focus:outline-none focus:border-emerald-500" placeholder="1250" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-slate-600 mb-1 font-medium">স্টক পরিমাণ</label>
                                    <input type="number" className="w-full border rounded-lg p-2 focus:outline-none focus:border-emerald-500" placeholder="10" required />
                                </div>
                                <div>
                                    <label className="block text-slate-600 mb-1 font-medium">ছবি (URL)</label>
                                    <input type="text" className="w-full border rounded-lg p-2 focus:outline-none focus:border-emerald-500" placeholder="https://..." />
                                </div>
                            </div>

                            <div className="pt-3 flex justify-end gap-2 border-t">
                                <button type="button" onClick={() => setShowAddProductModal(false)} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-bold">বাতিল</button>
                                <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-bold">সেভ করুন</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};