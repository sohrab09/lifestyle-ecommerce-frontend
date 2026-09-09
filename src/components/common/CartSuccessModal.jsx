import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

export const CartSuccessModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark Overlay Background */}
            <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Dialog Card */}
            <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-sm p-6 text-center z-10 transform transition-all animate-in fade-in zoom-in duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 transition-colors p-1"
                    aria-label="Close"
                >
                    <X className="w-4 h-4" />
                </button>

                {/* Success Message Header */}
                <div className="my-3">
                    <h3 className="text-sm font-semibold text-slate-800">
                        পণ্যটি আপনার কার্টে যুক্ত হয়েছে
                    </h3>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-3 mt-5">
                    <button
                        onClick={() => {
                            onClose();
                            navigate('/cart');
                        }}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2.5 px-4 rounded-md transition-colors shadow-sm"
                    >
                        শপিং ব্যাগ
                    </button>

                    <button
                        onClick={onClose}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2.5 px-4 rounded-md transition-colors shadow-sm"
                    >
                        আরও কিনুন
                    </button>
                </div>

                {/* Login Hint Link */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                    <button
                        onClick={() => {
                            onClose();
                            navigate('/login');
                        }}
                        className="text-[11px] text-slate-500 hover:text-red-600 underline transition-colors"
                    >
                        শপিং ব্যাগ সংরক্ষণ করতে লগইন করুন
                    </button>
                </div>

            </div>
        </div>
    );
};