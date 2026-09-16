import { UserSidebar } from '../../components/dashboard/UserSidebar';
import { ShoppingBag, Clock, CheckCircle2, Crown, MapPin, ArrowUpRight } from 'lucide-react';

export const UserDashboard = () => {
    return (
        <div className="bg-slate-50/60 min-h-screen py-8 md:py-10">
            <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-40">

                {/* Header Welcome Banner */}
                <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div>
                        <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                            স্বাগতম, Mohammad Sohrab Hossain! 👋
                        </h1>
                        <p className="text-xs md:text-sm text-slate-500 mt-1">
                            আপনার অ্যাকাউন্টের সাম্প্রতিক কার্যকলাপ এবং অর্ডারের স্ট্যাটাস এখানে দেখুন।
                        </p>
                    </div>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <UserSidebar />
                    </div>

                    {/* Dashboard Main Content */}
                    <div className="lg:col-span-3 space-y-6">

                        {/* Overview Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            {/* Total Orders */}
                            <div className="relative overflow-hidden bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">মোট অর্ডার</p>
                                        <p className="text-2xl font-black text-slate-900 mt-1">১২ টি</p>
                                    </div>
                                    <div className="p-3.5 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
                                        <ShoppingBag className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-500">
                                    <span>সর্বশেষ অর্ডার: ৩ দিন আগে</span>
                                </div>
                            </div>

                            {/* Pending Orders */}
                            <div className="relative overflow-hidden bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">পেন্ডিং অর্ডার</p>
                                        <p className="text-2xl font-black text-amber-600 mt-1">১ টি</p>
                                    </div>
                                    <div className="p-3.5 bg-amber-50 text-amber-600 rounded-2xl group-hover:scale-110 transition-transform">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-500">
                                    <span className="text-amber-600 font-semibold">প্রসেসিং চলছে...</span>
                                </div>
                            </div>

                            {/* Delivered */}
                            <div className="relative overflow-hidden bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">ডেলিভার্ড</p>
                                        <p className="text-2xl font-black text-emerald-600 mt-1">১১ টি</p>
                                    </div>
                                    <div className="p-3.5 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:scale-110 transition-transform">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-500">
                                    <span>সফলভাবে সম্পন্ন</span>
                                </div>
                            </div>
                        </div>

                        {/* Recent Order Preview Widget */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                                <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-emerald-600" />
                                    সর্বশেষ অর্ডার
                                </h2>
                                <a href="/dashboard/orders" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                                    সব দেখুন <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-extrabold text-slate-900">#ORD-98241</span>
                                        <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded-md">
                                            প্রসেসিং হচ্ছে
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-500">আইটেম: রয়েল ওউদ আতর (৬ মিলি) + ১টি বুক</p>
                                </div>
                                <div className="text-left sm:text-right">
                                    <p className="text-sm font-bold text-slate-900">৳ ১,৪৫০</p>
                                    <p className="text-[11px] text-slate-400">১৬ সেপ্টেম্বর, ২০২৬</p>
                                </div>
                            </div>
                        </div>

                        {/* Profile Information */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-5">
                            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                                <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
                                    <Crown className="w-4 h-4 text-amber-500" />
                                    প্রোফাইল তথ্য
                                </h2>
                                <button className="text-xs font-bold text-emerald-600 hover:underline">
                                    এডিট প্রোফাইল
                                </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                                <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100">
                                    <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">পূর্ণ নাম</label>
                                    <p className="font-bold text-slate-800 text-sm">ইউজার নেম</p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100">
                                    <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">ইমেইল ঠিকানা</label>
                                    <p className="font-bold text-slate-800 text-sm">user@example.com</p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100">
                                    <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">মোবাইল নম্বর</label>
                                    <p className="font-bold text-slate-800 text-sm">+880 1700-000000</p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100">
                                    <label className="text-[10px] uppercase font-bold text-slate-400 flex mb-1 items-center gap-1">
                                        <MapPin className="w-3 h-3 text-emerald-600" /> ডিফল্ট ঠিকানা
                                    </label>
                                    <p className="font-bold text-slate-800 text-sm">ধানমন্ডি, ঢাকা - ১২০৯</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};