import React from 'react';
import { Link } from 'react-router-dom';

// আপনার আপলোড করা লোগোর ইমেজ লিঙ্ক বা পাথ
const LOGO_SRC = "https://i.ibb.co/L5Qz88m/shopping-hat-logo.jpg";

export const Logo = ({ size = 'md', showText = true, className = '' }) => {
    // সাইজ অনুযায়ী লোগোর ডাইমেনশন নির্ধারণ
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-10 h-10 sm:w-12 sm:h-12',
        lg: 'w-14 h-14 sm:w-16 sm:h-16',
        xl: 'w-20 h-20 sm:w-24 sm:h-24',
    };

    return (
        <Link
            to="/"
            className={`inline-flex items-center gap-2.5 group focus:outline-none ${className}`}
        >
            {/* Circle Logo Wrapper */}
            <div className={`relative rounded-full overflow-hidden shrink-0 shadow-sm ring-2 ring-red-500/20 group-hover:ring-red-600 transition-all duration-300 ${sizeClasses[size]}`}>
                <img
                    src={LOGO_SRC}
                    alt="শপিং হাট"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Optional Side Text / Brand Name */}
            {showText && (
                <div className="flex flex-col">
                    <span className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight group-hover:text-red-600 transition-colors leading-none">
                        শপিং হাট
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase mt-0.5">
                        E-Commerce
                    </span>
                </div>
            )}
        </Link>
    );
};