import { Link, useLocation } from 'react-router-dom';
import { User, ShoppingBag, Heart, MapPin, LogOut, ChevronRight } from 'lucide-react';

export const UserSidebar = () => {
    const location = useLocation();

    const menuItems = [
        { name: 'আমার প্রোফাইল', path: '/dashboard', icon: User, badge: null },
        { name: 'আমার অর্ডারসমুহ', path: '/dashboard/orders', icon: ShoppingBag, badge: '১২টি' },
        { name: 'উইশলিস্ট', path: '/wishlist', icon: Heart, badge: '৫টি' },
        { name: 'ডেলিভারি ঠিকানা', path: '/dashboard/address', icon: MapPin, badge: '২টি' },
    ];

    return (
        <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-xl shadow-slate-200/50 space-y-6 sticky top-24">

            {/* User Info Header with Luxury Gradient Accent */}
            <div className="relative overflow-hidden p-4 rounded-xl bg-linear-to-br from-slate-900 via-emerald-950 to-slate-900 text-white shadow-lg">
                {/* Glow Accent */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-amber-500/20 rounded-full blur-xl pointer-events-none"></div>

                <div className="relative z-10 flex items-center gap-3.5">
                    <div className="relative">
                        <div className="w-12 h-12 bg-linear-to-tr from-amber-400 to-emerald-400 text-slate-900 font-extrabold rounded-full flex items-center justify-center text-lg shadow-md border-2 border-white/20">
                            N
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <div className="flex items-center gap-1.5">
                            <h3 className="text-sm font-bold text-white truncate">Nahid</h3>
                        </div>
                        <p className="text-[11px] text-slate-300 truncate">nahid@gmail.com</p>
                    </div>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-1.5">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`group relative flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition-all duration-300 ${isActive
                                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 font-bold translate-x-1'
                                : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-700 hover:translate-x-1'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-amber-300' : 'text-slate-400 group-hover:text-emerald-600'
                                    }`} />
                                <span>{item.name}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                {item.badge && (
                                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-colors ${isActive
                                        ? 'bg-emerald-700 text-white'
                                        : 'bg-slate-100 text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-700'
                                        }`}>
                                        {item.badge}
                                    </span>
                                )}
                                <ChevronRight className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 ${isActive ? 'opacity-100 text-amber-300' : 'text-slate-400'
                                    }`} />
                            </div>
                        </Link>
                    );
                })}

                <div className="pt-3 border-t border-slate-100">
                    <button className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-all duration-200 group">
                        <div className="flex items-center gap-3">
                            <LogOut className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                            <span>লগআউট</span>
                        </div>
                    </button>
                </div>
            </nav>
        </div>
    );
};