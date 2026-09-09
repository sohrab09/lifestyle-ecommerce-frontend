import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NEW_ARRIVALS = [
    {
        id: 'n1',
        title: 'নাস্তিক বন্ধুর সঙ্গে সংলাপ',
        author: 'ড. মুয়াজ্জাম মাহমুদ',
        price: 190,
        previousPrice: 380,
        discount: 50,
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&auto=format&fit=crop&q=80',
        slug: 'nastik-bondhur-songe-songlap'
    },
    {
        id: 'n2',
        title: 'নবিজীর সিরাহ ১ম ও ২য় খণ্ড',
        author: 'মাওলানা জুলফিকার আহমদ',
        price: 637,
        previousPrice: 980,
        discount: 35,
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&auto=format&fit=crop&q=80',
        slug: 'nabijir-seerah-1-2'
    },
    {
        id: 'n3',
        title: 'তাকওয়া মুমিনের হাতিয়ার',
        author: 'আরিফ আজাদ',
        price: 110,
        previousPrice: 200,
        discount: 45,
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&auto=format&fit=crop&q=80',
        slug: 'taqwa-muminer-hatiyar'
    },
    {
        id: 'n4',
        title: '৭ হ্যাবিটস অব হাইলি ইফেক্টিভ টিনস',
        author: 'শন কভি',
        price: 421,
        previousPrice: 540,
        discount: 22,
        image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&auto=format&fit=crop&q=80',
        slug: '7-habits-highly-effective-teens'
    },
    {
        id: 'n5',
        title: 'রহমতের ফলধারা (১-৪)',
        author: 'খালিদ হোস',
        price: 1000,
        previousPrice: 2000,
        discount: 50,
        image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&auto=format&fit=crop&q=80',
        slug: 'rohmoter-foldhara'
    },
    {
        id: 'n6',
        title: 'শিক্ষার্থীদের হক ও আমানত',
        author: 'কাউসার প্রবীণ',
        price: 110,
        previousPrice: 200,
        discount: 45,
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&auto=format&fit=crop&q=80',
        slug: 'shikkharthider-hok-o-amanot'
    }
];

export const NewArrivalsSection = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.75;
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-slate-900">নতুন প্রকাশিত বই</h2>
                <Link to="/products?filter=new" className="text-xs font-semibold text-red-600 hover:underline">
                    সবগুলো দেখুন
                </Link>
            </div>

            {/* Carousel Container */}
            <div className="relative group">
                <div
                    ref={scrollRef}
                    className="flex items-stretch gap-4 overflow-x-auto no-scrollbar scroll-smooth py-2"
                >
                    {NEW_ARRIVALS.map((product) => (
                        <div
                            key={product.id}
                            className="flex-shrink-0 w-36 sm:w-44 flex flex-col justify-between group/card"
                        >
                            <div>
                                {/* Image Container with Round Discount Badge */}
                                <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden bg-surface-100 mb-2">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                    {product.discount > 0 && (
                                        <div className="absolute top-1.5 left-1.5 bg-red-600 text-white text-[10px] font-bold w-8 h-8 rounded-full flex flex-col items-center justify-center leading-none shadow">
                                            <span>{product.discount}%</span>
                                            <span className="text-[8px] uppercase">OFF</span>
                                        </div>
                                    )}
                                </div>

                                {/* Title & Author */}
                                <Link to={`/products/${product.slug}`}>
                                    <h3 className="text-xs sm:text-sm font-semibold text-slate-800 line-clamp-2 hover:text-primary-900 leading-snug">
                                        {product.title}
                                    </h3>
                                </Link>
                                <p className="text-[11px] text-slate-400 mt-1 truncate">{product.author}</p>
                            </div>

                            {/* Pricing */}
                            <div className="mt-2 flex items-baseline gap-1.5">
                                <span className="text-sm font-bold text-red-600">৳{product.price}</span>
                                {product.previousPrice && (
                                    <span className="text-xs text-slate-400 line-through">৳{product.previousPrice}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute -left-3 top-1/3 -translate-y-1/2 bg-white border border-surface-200 text-slate-700 p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    aria-label="Previous"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute -right-3 top-1/3 -translate-y-1/2 bg-white border border-surface-200 text-slate-700 p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    aria-label="Next"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </section>
    );
};