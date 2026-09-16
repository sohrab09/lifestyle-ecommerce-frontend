import { useState } from 'react';
import { UserSidebar } from '../../components/dashboard/UserSidebar';
import {
    ShoppingBag, Search, Eye, PackageCheck,
    Truck, Clock, CheckCircle2, XCircle, MapPin, Calendar, CreditCard, X
} from 'lucide-react';

export const MyOrders = () => {
    const [selectedTab, setSelectedTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedOrderModal, setSelectedOrderModal] = useState(null);

    // ডামি অর্ডার ডাটা (বাংলাদেশি রিয়েলিস্টিক ডাটা সহ)
    const dummyOrders = [
        {
            id: 'ORD-98241',
            date: '১৬ সেপ্টেম্বর, ২০২৬',
            status: 'Processing',
            statusBg: 'bg-amber-50 text-amber-700 border-amber-200/60',
            paymentMethod: 'bKash (Paid)',
            totalAmount: 1450,
            items: [
                { id: 1, name: 'রয়েল ওউদ আতর (Royal Oud)', variant: '৬ মিলি', price: 950, qty: 1, image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=200' },
                { id: 2, name: 'হাতে বোনা ডেকোরেটিভ কুশন', variant: '১৬x১৬ ইঞ্চি', price: 500, qty: 1, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=200' }
            ],
            shippingAddress: 'বাসা #১২, রোড #০৫, ব্লক-বি, ধানমন্ডি, ঢাকা - ১২০৯',
            phone: '+880 1700-000000'
        },
        {
            id: 'ORD-98120',
            date: '১০ সেপ্টেম্বর, ২০২৬',
            status: 'Delivered',
            statusBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
            paymentMethod: 'Cash on Delivery',
            totalAmount: 3200,
            items: [
                { id: 3, name: 'প্রিমিয়াম সিরামিক ফুলদানি সেরামিক সেট', variant: 'সাদা ও গোল্ডেন', price: 3200, qty: 1, image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&q=80&w=200' }
            ],
            shippingAddress: 'বাসা #১২, রোড #০৫, ব্লক-বি, ধানমন্ডি, ঢাকা - ১২০৯',
            phone: '+880 1700-000000'
        },
        {
            id: 'ORD-97850',
            date: '২৮ আগস্ট, ২০২৬',
            status: 'Delivered',
            statusBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
            paymentMethod: 'bKash (Paid)',
            totalAmount: 1200,
            items: [
                { id: 4, name: 'মেশকাত মোবারক আতর Collection', variant: '১২ মিলি', price: 1200, qty: 1, image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=200' }
            ],
            shippingAddress: 'বাসা #১২, রোড #০৫, ব্লক-বি, ধানমন্ডি, ঢাকা - ১২০৯',
            phone: '+880 1700-000000'
        },
        {
            id: 'ORD-96540',
            date: '১৫ জুলাই, ২০২৬',
            status: 'Cancelled',
            statusBg: 'bg-rose-50 text-rose-700 border-rose-200/60',
            paymentMethod: 'Cash on Delivery',
            totalAmount: 850,
            items: [
                { id: 5, name: 'অ্যারোমাটিক সেন্ডেলউড ক্যান্ডেল', variant: 'স্ট্যান্ডার্ড', price: 850, qty: 1, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=200' }
            ],
            shippingAddress: 'বাসা #১২, রোড #০৫, ব্লক-বি, ধানমন্ডি, ঢাকা - ১২০৯',
            phone: '+880 1700-000000'
        }
    ];

    // ফিল্টারিং ও সার্চিং লজিক
    const filteredOrders = dummyOrders.filter(order => {
        const matchesTab = selectedTab === 'all' || order.status.toLowerCase() === selectedTab.toLowerCase();
        const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesTab && matchesSearch;
    });

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Processing': return <Clock className="w-3.5 h-3.5 text-amber-600" />;
            case 'Shipped': return <Truck className="w-3.5 h-3.5 text-blue-600" />;
            case 'Delivered': return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />;
            case 'Cancelled': return <XCircle className="w-3.5 h-3.5 text-rose-600" />;
            default: return <PackageCheck className="w-3.5 h-3.5 text-slate-600" />;
        }
    };

    return (
        <div className="bg-slate-50/60 min-h-screen py-8 md:py-10">
            {/* হোম ও ড্যাশবোর্ডের সাথে সামঞ্জস্যপূর্ণ Max-Width */}
            <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-40">

                {/* Header Title */}
                <div className="mb-8 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                            আমার অর্ডারসমুহ 🛍️
                        </h1>
                        <p className="text-xs md:text-sm text-slate-500 mt-1">
                            আপনার সাম্প্রতিক ও পূর্বের সকল অর্ডারের তালিকা ও ট্র্যাকিং স্ট্যাটাস দেখুন।
                        </p>
                    </div>
                </div>

                {/* Dashboard Main Grid Structure */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <UserSidebar />
                    </div>

                    {/* Orders Main Content */}
                    <div className="lg:col-span-3 space-y-6">

                        {/* Search & Filter Toolbar */}
                        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">

                            {/* Search Box */}
                            <div className="relative w-full md:w-80">
                                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                <input
                                    type="text"
                                    placeholder="অর্ডার আইডি বা পণ্যের নামে খুঁজুন..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
                                />
                            </div>

                            {/* Status Filter Tabs */}
                            <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
                                {[
                                    { id: 'all', label: 'সবগুলো' },
                                    { id: 'processing', label: 'প্রসেসিং' },
                                    { id: 'delivered', label: 'ডেলিভার্ড' },
                                    { id: 'cancelled', label: 'বাতিল' },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setSelectedTab(tab.id)}
                                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${selectedTab === tab.id
                                            ? 'bg-slate-900 text-white shadow-sm'
                                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Orders List Container */}
                        {filteredOrders.length > 0 ? (
                            <div className="space-y-4">
                                {filteredOrders.map((order) => (
                                    <div key={order.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">

                                        {/* Order Top Bar */}
                                        <div className="p-4 sm:p-5 bg-slate-50/50 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
                                            <div className="flex flex-wrap items-center gap-3">
                                                <span className="text-sm font-black text-slate-900">{order.id}</span>
                                                <span className="text-slate-300">•</span>
                                                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                                                    {order.date}
                                                </div>
                                                <span className="text-slate-300">•</span>
                                                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                                    <CreditCard className="w-3.5 h-3.5 text-slate-400" />
                                                    {order.paymentMethod}
                                                </div>
                                            </div>

                                            {/* Status Badge */}
                                            <div className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${order.statusBg}`}>
                                                {getStatusIcon(order.status)}
                                                <span>
                                                    {order.status === 'Processing' && 'প্রসেসিং হচ্ছে'}
                                                    {order.status === 'Delivered' && 'ডেলিভার্ড সম্পন্ন'}
                                                    {order.status === 'Cancelled' && 'বাতিল করা হয়েছে'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Order Items Preview */}
                                        <div className="p-4 sm:p-5 divide-y divide-slate-100">
                                            {order.items.map((item) => (
                                                <div key={item.id} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                                                    <div className="flex items-center gap-3.5">
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-14 h-14 object-cover rounded-xl border border-slate-100 shrink-0"
                                                        />
                                                        <div>
                                                            <h4 className="text-xs font-bold text-slate-800 line-clamp-1">{item.name}</h4>
                                                            <p className="text-[11px] text-slate-400 mt-0.5">ভেরিয়েন্ট: {item.variant}</p>
                                                            <p className="text-xs font-semibold text-slate-600 mt-1">
                                                                ৳ {item.price} × {item.qty}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="text-xs font-bold text-slate-900">৳ {item.price * item.qty}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Order Bottom Action Bar */}
                                        <div className="p-4 sm:p-5 bg-slate-50/30 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                            <div>
                                                <span className="text-xs text-slate-400 font-medium">মোট পরিশোধযোগ্য মূল্য:</span>
                                                <span className="text-base font-black text-slate-900 ml-2">৳ {order.totalAmount}</span>
                                            </div>

                                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                                <button
                                                    onClick={() => setSelectedOrderModal(order)}
                                                    className="w-full sm:w-auto px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
                                                >
                                                    <Eye className="w-3.5 h-3.5" />
                                                    ডিটেইলস দেখুন
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        ) : (
                            /* Empty State */
                            <div className="bg-white p-12 rounded-2xl border border-slate-100 shadow-sm text-center space-y-4">
                                <div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto">
                                    <ShoppingBag className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-slate-800">কোনো অর্ডার পাওয়া যায়নি!</h3>
                                    <p className="text-xs text-slate-400 mt-1">আপনার সার্চ কিংবা ফিল্টারের সাথে মিলে এমন কোনো অর্ডার এই মুহূর্তে নেই।</p>
                                </div>
                            </div>
                        )}

                    </div>

                </div>
            </div>

            {/* Order Details Modal */}
            {selectedOrderModal && (
                <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in duration-200">

                        {/* Modal Header */}
                        <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
                            <div>
                                <h3 className="text-base font-bold flex items-center gap-2">
                                    অর্ডার বিবরণী - {selectedOrderModal.id}
                                </h3>
                                <p className="text-xs text-slate-300 mt-0.5">অর্ডার তারিখ: {selectedOrderModal.date}</p>
                            </div>
                            <button
                                onClick={() => setSelectedOrderModal(null)}
                                className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-slate-300 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">

                            {/* Shipping Details */}
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                                <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                                    ডেলিভারি ঠিকানা
                                </h4>
                                <p className="text-xs font-bold text-slate-800">{selectedOrderModal.shippingAddress}</p>
                                <p className="text-xs text-slate-500">ফোন: {selectedOrderModal.phone}</p>
                            </div>

                            {/* Order Items */}
                            <div className="space-y-3">
                                <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">অর্ডারকৃত আইটেমসমূহ</h4>
                                <div className="divide-y divide-slate-100 border border-slate-100 rounded-xl p-3 bg-white">
                                    {selectedOrderModal.items.map((item) => (
                                        <div key={item.id} className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between text-xs">
                                            <div className="flex items-center gap-3">
                                                <img src={item.image} alt="" className="w-10 h-10 object-cover rounded-lg border border-slate-100" />
                                                <div>
                                                    <p className="font-bold text-slate-800">{item.name}</p>
                                                    <p className="text-[10px] text-slate-400">ভেরিয়েন্ট: {item.variant}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-slate-900">৳ {item.price} × {item.qty}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Payment Summary */}
                            <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100/60 space-y-2 text-xs">
                                <div className="flex justify-between text-slate-600">
                                    <span>সাবটোটাল</span>
                                    <span className="font-bold">৳ {selectedOrderModal.totalAmount - 60}</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>ডেলিভারি চার্জ</span>
                                    <span className="font-bold">৳ ৬০</span>
                                </div>
                                <div className="pt-2 border-t border-emerald-200/60 flex justify-between font-black text-slate-900 text-sm">
                                    <span>সর্বমোট</span>
                                    <span className="text-emerald-700">৳ {selectedOrderModal.totalAmount}</span>
                                </div>
                            </div>

                        </div>

                        {/* Modal Footer */}
                        <div className="p-4 bg-slate-50 border-t border-slate-100 text-right">
                            <button
                                onClick={() => setSelectedOrderModal(null)}
                                className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-bold transition-colors"
                            >
                                বন্ধ করুন
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
};