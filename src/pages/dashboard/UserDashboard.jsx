import React from 'react';
import { UserSidebar } from '../../components/dashboard/UserSidebar';
import { ShoppingBag, Clock, CheckCircle2, Truck } from 'lucide-react';

export const UserDashboard = () => {
    return (
        <div className="bg-surface-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <UserSidebar />
                    </div>

                    {/* Dashboard Main Content */}
                    <div className="lg:col-span-3 space-y-6">

                        {/* Overview Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-white p-5 rounded-xl border border-surface-200 shadow-sm flex items-center gap-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                                    <ShoppingBag className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">মোট অর্ডার</p>
                                    <p className="text-xl font-bold text-slate-900">১২ টি</p>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-surface-200 shadow-sm flex items-center gap-4">
                                <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">পেন্ডিং অর্ডার</p>
                                    <p className="text-xl font-bold text-slate-900">১ টি</p>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-surface-200 shadow-sm flex items-center gap-4">
                                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">ডেলিভার্ড</p>
                                    <p className="text-xl font-bold text-slate-900">১১ টি</p>
                                </div>
                            </div>
                        </div>

                        {/* Profile Information */}
                        <div className="bg-white p-6 rounded-xl border border-surface-200 shadow-sm space-y-4">
                            <h2 className="text-lg font-bold text-slate-800 pb-2 border-b border-surface-100">
                                প্রোফাইল তথ্য
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <label className="text-xs text-slate-500 block mb-1">পূর্ণ নাম</label>
                                    <p className="font-semibold text-slate-800">ইউজার নেম</p>
                                </div>
                                <div>
                                    <label className="text-xs text-slate-500 block mb-1">ইমেইল ঠিকানা</label>
                                    <p className="font-semibold text-slate-800">user@example.com</p>
                                </div>
                                <div>
                                    <label className="text-xs text-slate-500 block mb-1">মোবাইল নম্বর</label>
                                    <p className="font-semibold text-slate-800">+880 1700-000000</p>
                                </div>
                                <div>
                                    <label className="text-xs text-slate-500 block mb-1">ডিফল্ট ঠিকানা</label>
                                    <p className="font-semibold text-slate-800">ধানমন্ডি, ঢাকা - ১২০৯</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};