import React, { useState } from 'react';
import { Logo } from '../components/common/Logo';

export const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (phoneNumber.trim()) {
            alert(`OTP Sent to: ${phoneNumber}`);
        }
    };

    return (
        <div className="bg-white min-h-[calc(100vh-160px)] flex items-center justify-center py-10 px-4">
            <div className="max-w-4xl w-full bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col md:flex-row items-center justify-between">

                {/* Left Side Illustration */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex justify-center bg-slate-50/50">
                    <img
                        src="https://img.freepik.com/free-vector/students-studying-college-library_74855-5294.jpg"
                        alt="Login Illustration"
                        className="w-full max-w-sm object-contain"
                    />
                </div>

                {/* Right Side Login Form */}
                <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col items-center">

                    {/* Logo */}
                    <div className="mb-6">
                        <Logo size="lg" showText={true} />
                    </div>

                    <p className="text-xs font-semibold text-slate-700 mb-6">
                        মোবাইল নাম্বার দিয়ে লগইন করুন
                    </p>

                    <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
                        {/* Mobile Input Field */}
                        <div>
                            <input
                                type="tel"
                                placeholder="01324299XXX"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="w-full px-4 py-2.5 text-xs text-slate-800 bg-white border border-slate-200 rounded-md focus:outline-none focus:border-red-600 transition-colors placeholder:text-slate-300"
                                required
                            />
                        </div>

                        {/* Login / Register Button */}
                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-2.5 rounded-md transition-colors shadow-sm"
                        >
                            লগইন / রেজিস্টার
                        </button>
                    </form>

                    {/* Alternative Login Options */}
                    <div className="w-full max-w-xs space-y-2.5 mt-4">
                        <button
                            type="button"
                            className="w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium text-xs py-2 rounded-md transition-colors"
                        >
                            ইমেইল দিয়ে লগইন করুন
                        </button>

                        <button
                            type="button"
                            className="w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium text-xs py-2 rounded-md transition-colors flex items-center justify-center gap-2"
                        >
                            <span>গুগল দিয়ে লগইন করুন</span>
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};