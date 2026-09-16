import { useState } from 'react';
import { UserSidebar } from '../../components/dashboard/UserSidebar';
import {
    Plus, Edit2, Trash2, CheckCircle2, Home,
    Briefcase, Building, X, Navigation
} from 'lucide-react';

export const AddressManagement = () => {
    // ডামি সেভ করা অ্যাড্রেস ডাটা
    const [addresses, setAddresses] = useState([
        {
            id: 'ADDR-101',
            title: 'বাসা (Home)',
            iconType: 'home',
            name: 'ইউজার নেম',
            phone: '+880 1700-000000',
            addressLine: 'বাসা #১২, রোড #০৫, ব্লক-বি, ধানমন্ডি',
            city: 'ঢাকা',
            zone: 'ঢাকা দক্ষিণ',
            postalCode: '১২০৯',
            isDefault: true
        },
        {
            id: 'ADDR-102',
            title: 'অফিস (Office)',
            iconType: 'work',
            name: 'ইউজার নেম',
            phone: '+880 1800-112233',
            addressLine: 'লেভেল-৪, টাওয়ার বি, কারওয়ান বাজার',
            city: 'ঢাকা',
            zone: 'ঢাকা উত্তর',
            postalCode: '১২১৫',
            isDefault: false
        }
    ]);

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);

    // ডিফল্ট অ্যাড্রেস পরিবর্তন করার হুক
    const handleSetDefault = (id) => {
        setAddresses(addresses.map(addr => ({
            ...addr,
            isDefault: addr.id === id
        })));
    };

    // অ্যাড্রেস ডিলিট করার হ্যান্ডলার
    const handleDelete = (id) => {
        if (window.confirm('আপনি কি নিশ্চিত এই ঠিকানাটি মুছে ফেলতে চান?')) {
            setAddresses(addresses.filter(addr => addr.id !== id));
        }
    };

    // আইকন পিক করার হেলপার
    const renderAddressIcon = (type) => {
        switch (type) {
            case 'work': return <Briefcase className="w-4 h-4 text-blue-600" />;
            case 'other': return <Building className="w-4 h-4 text-amber-600" />;
            default: return <Home className="w-4 h-4 text-emerald-600" />;
        }
    };

    return (
        <div className="bg-slate-50/60 min-h-screen py-8 md:py-10">
            {/* হোম পেজ ও ড্যাশবোর্ডের সাথে একই Max-Width */}
            <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-40">

                {/* Header Welcome Bar */}
                <div className="mb-8 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                            ডেলিভারি ঠিকানা 📍
                        </h1>
                        <p className="text-xs md:text-sm text-slate-500 mt-1">
                            আপনার প্রোডাক্ট ডেলিভারির জন্য সেভ করা সকল ঠিকানা এখান থেকে পরিচালনা করুন।
                        </p>
                    </div>

                    <button
                        onClick={() => { setEditingAddress(null); setIsAddModalOpen(true); }}
                        className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-600/20 flex items-center gap-2 active:scale-95"
                    >
                        <Plus className="w-4 h-4" />
                        নতুন ঠিকানা যোগ করুন
                    </button>
                </div>

                {/* Main Content Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <UserSidebar />
                    </div>

                    {/* Address List Container */}
                    <div className="lg:col-span-3 space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {addresses.map((item) => (
                                <div
                                    key={item.id}
                                    className={`relative bg-white rounded-2xl border p-5 transition-all duration-300 flex flex-col justify-between ${item.isDefault
                                        ? 'border-emerald-500 ring-2 ring-emerald-500/10 shadow-md'
                                        : 'border-slate-100 hover:border-slate-200 shadow-sm hover:shadow'
                                        }`}
                                >
                                    <div>
                                        {/* Top Info Bar */}
                                        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                                            <div className="flex items-center gap-2">
                                                <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                                                    {renderAddressIcon(item.iconType)}
                                                </div>
                                                <h3 className="text-sm font-black text-slate-800">{item.title}</h3>
                                            </div>

                                            {item.isDefault ? (
                                                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-[10px] font-extrabold rounded-lg flex items-center gap-1">
                                                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                                    ডিফল্ট ঠিকানা
                                                </span>
                                            ) : (
                                                <button
                                                    onClick={() => handleSetDefault(item.id)}
                                                    className="text-[11px] font-bold text-slate-400 hover:text-emerald-600 transition-colors"
                                                >
                                                    ডিফল্ট করুন
                                                </button>
                                            )}
                                        </div>

                                        {/* Address Details */}
                                        <div className="space-y-1.5 text-xs text-slate-600">
                                            <p className="font-bold text-slate-900 text-sm">{item.name}</p>
                                            <p className="font-semibold text-slate-500">{item.phone}</p>
                                            <p className="text-slate-700 font-medium pt-1 leading-relaxed">{item.addressLine}</p>
                                            <p className="text-slate-500">
                                                {item.zone}, {item.city} - {item.postalCode}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="pt-4 mt-4 border-t border-slate-50 flex items-center justify-end gap-2">
                                        <button
                                            onClick={() => { setEditingAddress(item); setIsAddModalOpen(true); }}
                                            className="p-2 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors flex items-center gap-1 text-xs font-bold"
                                        >
                                            <Edit2 className="w-3.5 h-3.5" />
                                            এডিট
                                        </button>

                                        {!item.isDefault && (
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors flex items-center gap-1 text-xs font-bold"
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
                                                মুছুন
                                            </button>
                                        )}
                                    </div>

                                </div>
                            ))}

                            {/* Add New Quick Card Option */}
                            <button
                                onClick={() => { setEditingAddress(null); setIsAddModalOpen(true); }}
                                className="h-full min-h-55 bg-slate-50/50 hover:bg-white rounded-2xl border-2 border-dashed border-slate-200 hover:border-emerald-500 p-6 flex flex-col items-center justify-center gap-3 text-slate-400 hover:text-emerald-600 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-white rounded-full border border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-300 transition-transform">
                                    <Plus className="w-5 h-5 text-slate-500 group-hover:text-emerald-600" />
                                </div>
                                <span className="text-xs font-bold">নতুন ডেলিভারি স্থান যুক্ত করুন</span>
                            </button>
                        </div>

                    </div>

                </div>
            </div>

            {/* Modal for Add / Edit Address */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in duration-200">

                        {/* Modal Header */}
                        <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
                            <h3 className="text-base font-bold flex items-center gap-2">
                                <Navigation className="w-4 h-4 text-emerald-400" />
                                {editingAddress ? 'ঠিকানা আপডেট করুন' : 'নতুন ডেলিভারি ঠিকানা যোগ করুন'}
                            </h3>
                            <button
                                onClick={() => setIsAddModalOpen(false)}
                                className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-slate-300 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Form */}
                        <form onSubmit={(e) => { e.preventDefault(); setIsAddModalOpen(false); }} className="p-6 space-y-4">

                            <div>
                                <label className="text-xs font-bold text-slate-600 block mb-1">ঠিকানার লেবেল</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {['Home', 'Office', 'Other'].map((type) => (
                                        <button
                                            key={type}
                                            type="button"
                                            className="py-2 px-3 border rounded-xl text-xs font-bold bg-slate-50 border-slate-200 hover:border-emerald-600 focus:bg-emerald-50 focus:border-emerald-600 text-slate-700"
                                        >
                                            {type === 'Home' ? 'বাসা' : type === 'Office' ? 'অফিস' : 'অন্যান্য'}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-slate-600 block mb-1">প্রাপকের নাম *</label>
                                    <input
                                        type="text"
                                        defaultValue={editingAddress?.name || ''}
                                        placeholder="পূর্ণ নাম"
                                        required
                                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-600 focus:bg-white"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-slate-600 block mb-1">মোবাইল নম্বর *</label>
                                    <input
                                        type="text"
                                        defaultValue={editingAddress?.phone || ''}
                                        placeholder="+880 1XXXX-XXXXXX"
                                        required
                                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-600 focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-600 block mb-1">বিস্তারিত ঠিকানা (বাসা/রোড নম্বর) *</label>
                                <textarea
                                    rows="2"
                                    defaultValue={editingAddress?.addressLine || ''}
                                    placeholder="যেমন: বাসা #১২, রোড #০৫, ব্লক-বি"
                                    required
                                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-600 focus:bg-white"
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-slate-600 block mb-1">জেলা / শহর *</label>
                                    <select defaultValue={editingAddress?.city || 'ঢাকা'} className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-600">
                                        <option value="ঢাকা">ঢাকা</option>
                                        <option value="চট্টগ্রাম">চট্টগ্রাম</option>
                                        <option value="সিলেট">সিলেট</option>
                                        <option value="রাজশাহী">রাজশাহী</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-slate-600 block mb-1">পোস্টাল কোড</label>
                                    <input
                                        type="text"
                                        defaultValue={editingAddress?.postalCode || ''}
                                        placeholder="১২০৯"
                                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-600 focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div className="pt-2 flex items-center gap-2">
                                <input type="checkbox" id="makeDefault" defaultChecked={editingAddress?.isDefault} className="rounded text-emerald-600 focus:ring-emerald-500" />
                                <label htmlFor="makeDefault" className="text-xs font-semibold text-slate-600">এটি আমার ডিফল্ট ডেলিভারি ঠিকানা হিসেবে সেট করুন</label>
                            </div>

                            {/* Form Action Bar */}
                            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
                                >
                                    বাতিল
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-600/20"
                                >
                                    {editingAddress ? 'সেভ পরিবর্তন' : 'ঠিকানা সেভ করুন'}
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            )}

        </div>
    );
};