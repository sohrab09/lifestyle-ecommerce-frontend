import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const CATEGORY_GROUPS = [
    {
        id: 'academic',
        title: 'একাডেমিক',
        viewAllLink: '/products?category=academic',
        items: [
            { name: 'ইউনিভার্সিটি', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=200&auto=format&fit=crop&q=80', link: '/products?category=university' },
            { name: 'একাদশ-দ্বাদশ শ্রেণী', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&auto=format&fit=crop&q=80', link: '/products?category=hsc' },
            { name: 'কারিগরি', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=200&auto=format&fit=crop&q=80', link: '/products?category=technical' },
            { name: 'মেডিকেল', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&auto=format&fit=crop&q=80', link: '/products?category=medical' },
        ],
    },
    {
        id: 'kids',
        title: 'শিশু-কিশোর বই',
        viewAllLink: '/products?category=kids',
        items: [
            { name: 'শিশু-কিশোর', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&auto=format&fit=crop&q=80', link: '/products?category=kids-general' },
            { name: 'বয়স যখন ০-৪', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&auto=format&fit=crop&q=80', link: '/products?age=0-4' },
            { name: 'বয়স যখন ১২-১৭', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&auto=format&fit=crop&q=80', link: '/products?age=12-17' },
            { name: 'বয়স যখন ৪-৮', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&auto=format&fit=crop&q=80', link: '/products?age=4-8' },
        ],
    },
    {
        id: 'history',
        title: 'ইতিহাস ও ঐতিহ্য',
        viewAllLink: '/products?category=history',
        items: [
            { name: 'ইতিহাস ও সংস্কৃতি', image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=200&auto=format&fit=crop&q=80', link: '/products?category=history-culture' },
            { name: 'দেশভিত্তিক ইতিহাস', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&auto=format&fit=crop&q=80', link: '/products?category=country-history' },
            { name: 'প্রত্নতাত্ত্বিক ইতিহাস', image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=200&auto=format&fit=crop&q=80', link: '/products?category=archaeology' },
            { name: 'প্রাচীন সভ্যতার ইতিহাস', image: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=200&auto=format&fit=crop&q=80', link: '/products?category=ancient-history' },
        ],
    },
    {
        id: 'qawmi',
        title: 'কওমি মাদ্রাসা',
        viewAllLink: '/products?category=qawmi',
        items: [
            { name: 'আদব বিভাগ', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&auto=format&fit=crop&q=80', link: '/products?category=adab' },
            { name: 'আরবি ও উর্দু অভিধান', image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=200&auto=format&fit=crop&q=80', link: '/products?category=dictionary' },
            { name: 'আরবি ব্যাকরণ', image: 'https://images.unsplash.com/photo-1495440153380-36f731e08112?w=200&auto=format&fit=crop&q=80', link: '/products?category=arabic-grammar' },
            { name: 'উলুমুল হাদিস বিভাগ', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&auto=format&fit=crop&q=80', link: '/products?category=hadith-science' },
        ],
    },
];

export const CategoryGroupGrid = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {CATEGORY_GROUPS.map((group) => (
                    <div
                        key={group.id}
                        className="bg-white rounded-xl p-4 border border-surface-200 shadow-sm flex flex-col justify-between"
                    >
                        {/* Header */}
                        <h3 className="text-base font-bold text-slate-800 mb-4">{group.title}</h3>

                        {/* 2x2 Sub-item Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            {group.items.map((item, idx) => (
                                <Link
                                    key={idx}
                                    to={item.link}
                                    className="group flex flex-col items-center p-2 rounded-lg bg-surface-50 hover:bg-surface-100 transition-colors"
                                >
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 overflow-hidden rounded-md bg-white border border-surface-200 flex items-center justify-center">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-slate-700 text-center line-clamp-1 group-hover:text-primary-900">
                                        {item.name}
                                    </span>
                                </Link>
                            ))}
                        </div>

                        {/* View All Link */}
                        <div className="pt-2 border-t border-surface-100">
                            <Link
                                to={group.viewAllLink}
                                className="inline-flex items-center gap-1 text-xs font-semibold text-accent-600 hover:text-accent-500 transition-colors"
                            >
                                সব দেখুন <ChevronRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};