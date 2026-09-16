import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export const Logo = ({ size = 'md', showText = true, isLink = true, className = '' }) => {
    // সাইজ অনুযায়ী লোগো ডাইমেনশন
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-10 h-10 sm:w-11 sm:h-11',
        lg: 'w-12 h-12 sm:w-14 sm:h-14',
        xl: 'w-16 h-16 sm:w-20 sm:h-20',
    };

    const iconSizes = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5 sm:w-6 sm:h-6',
        lg: 'w-6 h-6 sm:w-7 sm:h-7',
        xl: 'w-8 h-8 sm:w-10 sm:h-10',
    };

    const Content = (
        <div className={`inline-flex items-center gap-2.5 group cursor-pointer ${className}`}>
            {/* SVG/CSS Driven Premium Circle Logo */}
            <div className={`relative rounded-xl bg-linear-to-tr from-red-600 via-red-500 to-rose-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-red-500/20 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-red-500/30 transition-all duration-300 ${sizeClasses[size]}`}>
                <ShoppingBag className={`stroke-[2.2] transition-transform duration-300 group-hover:-rotate-6 ${iconSizes[size]}`} />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>

            {/* Brand Text */}
            {showText && (
                <div className="flex flex-col">
                    <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-none group-hover:text-red-600 transition-colors">
                        শপি <span className="text-red-600">হাট</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-1">
                        E-Commerce
                    </span>
                </div>
            )}
        </div>
    );

    if (!isLink) {
        return Content;
    }

    return (
        <Link to="/" className="focus:outline-none inline-block">
            {Content}
        </Link>
    );
};