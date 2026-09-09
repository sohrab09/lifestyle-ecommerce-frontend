import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Truck, CreditCard, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Checkout = () => {
    const navigate = useNavigate();

    // Shipping & Contact Info State
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        district: 'ঢাকা',
        address: '',
        note: ''
    });

    // Payment Method State: 'cod' or 'bkash'
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [trxId, setTrxId] = useState('');
    const [senderPhone, setSenderPhone] = useState('');

    // Cart Order Items (Demo Data)
    const orderItems = [
        { id: 1, title: 'HSC 28 ইংরেজি প্রথম পত্র: মাস্টার বুক', price: 680, quantity: 1 },
        { id: 2, title: 'সেট দাওরা ৯ পদ [১২ কিতাব]', price: 9300, quantity: 1 }
    ];

    const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const deliveryFee = formData.district === 'ঢাকা' ? 60 : 120;
    const grandTotal = subtotal + deliveryFee;

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmitOrder = (e) => {
        e.preventDefault();

        if (paymentMethod === 'bkash' && (!trxId || !senderPhone)) {
            alert('অনুগ্রহ করে বিকাশের পাঠানোর নম্বর এবং ট্রানজেকশন আইডি (TrxID) দিন।');
            return;
        }

        const orderPayload = {
            customer: formData,
            paymentMethod,
            paymentDetails: paymentMethod === 'bkash' ? { senderPhone, trxId } : null,
            items: orderItems,
            totalAmount: grandTotal,
            orderDate: new Date().toISOString()
        };

        console.log('Order Submitted:', orderPayload);
        alert('আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে!');
        navigate('/');
    };

    return (
        <div className="bg-slate-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title */}
                <h1 className="text-xl font-bold text-slate-900 mb-6">চেকআউট (Checkout)</h1>

                <form onSubmit={handleSubmitOrder} className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Guest Delivery Info & Payment Selection */}
                    <div className="w-full lg:w-2/3 space-y-6">

                        {/* Guest / Delivery Address Card */}
                        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                                    <Truck className="w-4 h-4 text-red-600" />
                                    ডেলিভারি তথ্য (গেস্ট হিসেবে চেকআউট)
                                </h2>
                                <Link to="/login" className="text-xs text-red-600 hover:underline">
                                    আগে থেকে একাউন্ট আছে? লগইন করুন
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                                <div>
                                    <label className="block text-slate-700 font-medium mb-1">আপনার নাম *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="সম্পূর্ণ নাম লিখুন"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:border-red-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-slate-700 font-medium mb-1">মোবাইল নম্বর *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="017XXXXXXXX"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:border-red-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-slate-700 font-medium mb-1">ইমেইল (ঐচ্ছিক)</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="example@mail.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:border-red-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-slate-700 font-medium mb-1">জেলা *</label>
                                    <select
                                        name="district"
                                        value={formData.district}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:border-red-600 bg-white"
                                    >
                                        <option value="ঢাকা">ঢাকা (ডেলিভারি চার্জ ৳৬০)</option>
                                        <option value="ঢাকার বাইরে">ঢাকার বাইরে (ডেলিভারি চার্জ ৳১২০)</option>
                                    </select>
                                </div>

                                <div className="sm:col-span-2">
                                    <label className="block text-slate-700 font-medium mb-1">সম্পূর্ণ ঠিকানা *</label>
                                    <textarea
                                        name="address"
                                        required
                                        rows="2"
                                        placeholder="হাউস নং, রোড নং, এলাকা/থানা..."
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:border-red-600"
                                    ></textarea>
                                </div>

                                <div className="sm:col-span-2">
                                    <label className="block text-slate-700 font-medium mb-1">অর্ডার নোট (ঐচ্ছিক)</label>
                                    <input
                                        type="text"
                                        name="note"
                                        placeholder="বিশেষ কোনো নির্দেশনা থাকলে লিখুন"
                                        value={formData.note}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:border-red-600"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Payment Method Option Card */}
                        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
                            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-3 flex items-center gap-2">
                                <CreditCard className="w-4 h-4 text-red-600" />
                                পেমেন্ট পদ্ধতি নির্বাচন করুন
                            </h2>

                            <div className="space-y-3">
                                {/* Cash on Delivery Option */}
                                <label className={`flex items-start gap-3 p-3.5 border rounded-lg cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-red-600 bg-red-50/20' : 'border-slate-200'}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cod"
                                        checked={paymentMethod === 'cod'}
                                        onChange={() => setPaymentMethod('cod')}
                                        className="mt-0.5 accent-red-600"
                                    />
                                    <div>
                                        <span className="text-xs font-bold text-slate-800 block">ক্যাশ অন ডেলিভারি (Cash on Delivery)</span>
                                        <span className="text-[11px] text-slate-500">পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন।</span>
                                    </div>
                                </label>

                                {/* bKash Payment Option */}
                                <label className={`flex items-start gap-3 p-3.5 border rounded-lg cursor-pointer transition-all ${paymentMethod === 'bkash' ? 'border-red-600 bg-red-50/20' : 'border-slate-200'}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="bkash"
                                        checked={paymentMethod === 'bkash'}
                                        onChange={() => setPaymentMethod('bkash')}
                                        className="mt-0.5 accent-red-600"
                                    />
                                    <div>
                                        <span className="text-xs font-bold text-slate-800 block">বিকাশ (bKash Personal / Merchant)</span>
                                        <span className="text-[11px] text-slate-500">বিকাশ নাম্বারে টাকা পাঠিয়ে ট্রানজেকশন আইডি প্রদান করুন।</span>
                                    </div>
                                </label>
                            </div>

                            {/* bKash Instructions & Form Field */}
                            {paymentMethod === 'bkash' && (
                                <div className="mt-4 p-4 bg-pink-50 border border-pink-200 rounded-md text-xs space-y-3 animate-in fade-in duration-200">
                                    <div className="text-slate-700 space-y-1">
                                        <p className="font-bold text-pink-700">বিকাশ পেমেন্ট নির্দেশিকা:</p>
                                        <p>১. আমাদের বিকাশ পার্সোনাল নম্বর: <span className="font-bold text-slate-900">01700000000</span> (Send Money)</p>
                                        <p>২. সর্বমোট টাকা পাঠানোর পর নিচের ঘরে তথ্য প্রদান করুন:</p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                        <div>
                                            <label className="block text-slate-700 font-medium mb-1">যে নম্বর থেকে পাঠিয়েছেন *</label>
                                            <input
                                                type="tel"
                                                required={paymentMethod === 'bkash'}
                                                placeholder="017XXXXXXXX"
                                                value={senderPhone}
                                                onChange={(e) => setSenderPhone(e.target.value)}
                                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-pink-600 bg-white"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-700 font-medium mb-1">ট্রানজেকশন আইডি (TrxID) *</label>
                                            <input
                                                type="text"
                                                required={paymentMethod === 'bkash'}
                                                placeholder="যেমন: 9J76A3XX"
                                                value={trxId}
                                                onChange={(e) => setTrxId(e.target.value)}
                                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-pink-600 bg-white uppercase"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4 shadow-sm sticky top-24">
                            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-3">
                                অর্ডার সামারি
                            </h2>

                            {/* Order Items List */}
                            <div className="space-y-3 max-h-52 overflow-y-auto pr-1">
                                {orderItems.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between text-xs">
                                        <div className="pr-2">
                                            <p className="font-medium text-slate-800 line-clamp-1">{item.title}</p>
                                            <p className="text-slate-400">পরিমাণ: {item.quantity}</p>
                                        </div>
                                        <span className="font-semibold text-slate-700">৳{item.price * item.quantity}</span>
                                    </div>
                                ))}
                            </div>

                            <hr className="border-slate-100" />

                            {/* Price Details */}
                            <div className="space-y-2 text-xs text-slate-600">
                                <div className="flex justify-between">
                                    <span>মোট সাবটোটাল</span>
                                    <span className="font-semibold text-slate-800">৳{subtotal.toLocaleString('bn-BD')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>ডেলিভারি চার্জ</span>
                                    <span className="font-semibold text-slate-800">৳{deliveryFee.toLocaleString('bn-BD')}</span>
                                </div>
                            </div>

                            <hr className="border-slate-100" />

                            {/* Total Amount */}
                            <div className="flex justify-between items-center text-sm font-bold text-slate-900">
                                <span>সর্বমোট</span>
                                <span className="text-base text-red-600">৳{grandTotal.toLocaleString('bn-BD')}</span>
                            </div>

                            {/* Submit Order Button */}
                            <button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-4 rounded-md transition-colors text-center text-xs shadow-md flex items-center justify-center gap-2"
                            >
                                <CheckCircle2 className="w-4 h-4" />
                                <span>অর্ডার কনফার্ম করুন</span>
                            </button>

                            <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
                                <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                                আপনার তথ্য ১০০% সুরক্ষিত
                            </p>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    );
};