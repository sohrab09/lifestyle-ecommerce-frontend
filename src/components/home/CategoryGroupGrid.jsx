import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, BookOpen, HeartHandshake, ShieldCheck } from 'lucide-react';

const CATEGORY_GROUPS = [
    {
        id: 'luxury-attar',
        title: 'প্রিমিয়াম আতর ও সুগন্ধি',
        icon: Sparkles,
        badge: 'Top Choice',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
        viewAllLink: '/products?category=attar',
        items: [
            { name: 'দেহন আল উদ', image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&auto=format&fit=crop&q=80', link: '/products?category=dehn-al-oud' },
            { name: 'রোজ ও মাস্ক', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&auto=format&fit=crop&q=80', link: '/products?category=rose-musk' },
            { name: 'হোয়াইট উদ', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=300&auto=format&fit=crop&q=80', link: '/products?category=white-oud' },
            { name: 'পারফিউম ওয়েল', image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=300&auto=format&fit=crop&q=80', link: '/products?category=perfume-oil' },
        ],
    },
    {
        id: 'academic-books',
        title: 'একাডেমিক ও ইসলামী বই',
        icon: BookOpen,
        badge: 'Popular',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        viewAllLink: '/products?category=books',
        items: [
            { name: 'ইউনিভার্সিটি', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&auto=format&fit=crop&q=80', link: '/products?category=university' },
            { name: 'এইচএসসি ও একাডেমি', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&auto=format&fit=crop&q=80', link: '/products?category=hsc' },
            { name: 'কওমি মাদ্রাসা', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&auto=format&fit=crop&q=80', link: '/products?category=qawmi' },
            { name: 'শিশু-কিশোর', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&auto=format&fit=crop&q=80', link: '/products?category=kids' },
        ],
    },
    {
        id: 'organic-food',
        title: 'অর্গানিক ফুড ও মধু',
        icon: ShieldCheck,
        badge: 'Pure 100%',
        badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
        viewAllLink: '/products?category=organic',
        items: [
            { name: 'প্রাকৃতিক মধু', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&auto=format&fit=crop&q=80', link: '/products?category=raw-honey' },
            { name: 'প্রিমিয়াম খেজুড়', image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=300&auto=format&fit=crop&q=80', link: '/products?category=dates' },
            { name: 'কালোজিরা তেল', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&auto=format&fit=crop&q=80', link: '/products?category=black-seed-oil' },
            { name: 'ড্রাই ফ্রুটস', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&auto=format&fit=crop&q=80', link: '/products?category=dry-fruits' },
        ],
    },
    {
        id: 'lifestyle-decor',
        title: 'লাইফস্টাইল ও হোম ডেকোর',
        icon: HeartHandshake,
        badge: 'Trending',
        badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
        viewAllLink: '/products?category=lifestyle',
        items: [
            { name: 'জায়নামাজ', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=300&auto=format&fit=crop&q=80', link: '/products?category=prayer-mat' },
            { name: 'ডিজিটাল তাসবিহ', image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=300&auto=format&fit=crop&q=80', link: '/products?category=tasbih' },
            { name: 'টেবিল ল্যাম্প', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&auto=format&fit=crop&q=80', link: '/products?category=table-lamp' },
            { name: 'সিরামিক ভাস', image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=300&auto=format&fit=crop&q=80', link: '/products?category=flower-vase' },
        ],
    },
];

export const CategoryGroupGrid = () => {
    return (
        <section className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {CATEGORY_GROUPS.map((group) => {
                    const IconComponent = group.icon;
                    return (
                        <div
                            key={group.id}
                            className="group/card bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
                        >
                            {/* Header Section */}
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 rounded-xl bg-slate-50 text-emerald-600 group-hover/card:bg-emerald-600 group-hover/card:text-white transition-colors duration-300">
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-base font-bold text-slate-800 group-hover/card:text-emerald-700 transition-colors">
                                            {group.title}
                                        </h3>
                                    </div>
                                    {group.badge && (
                                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${group.badgeColor}`}>
                                            {group.badge}
                                        </span>
                                    )}
                                </div>

                                {/* 2x2 Sub-item Grid */}
                                <div className="grid grid-cols-2 gap-3 my-2">
                                    {group.items.map((item, idx) => (
                                        <Link
                                            key={idx}
                                            to={item.link}
                                            className="group/item flex flex-col items-center p-2 rounded-xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-100 hover:border-emerald-200 transition-all duration-200"
                                        >
                                            <div className="w-full aspect-square mb-2 overflow-hidden rounded-lg bg-white border border-slate-100 relative">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                                            </div>
                                            <span className="text-xs font-semibold text-slate-700 text-center line-clamp-1 group-hover/item:text-emerald-700 transition-colors">
                                                {item.name}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* View All Footer Link */}
                            <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between">
                                <Link
                                    to={group.viewAllLink}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-800 transition-colors group/link"
                                >
                                    <span>সব দেখুন</span>
                                    <ChevronRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200" />
                                </Link>
                                <span className="text-[10px] text-slate-400 font-medium">৪টি আইটেম</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};