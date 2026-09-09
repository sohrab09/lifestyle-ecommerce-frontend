import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PRE_ORDER_BOOKS = [
    {
        id: 'p1',
        title: 'HSC 26 বাংলা প্রথম পত্র: মাস্টার বুক',
        author: 'টেন মিনিট স্কুল',
        price: 750,
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&auto=format&fit=crop&q=80',
        slug: 'hsc-26-bangla-1st-master-book'
    },
    {
        id: 'p2',
        title: 'HSC 26 বাংলা দ্বিতীয় পত্র: মাস্টার বুক',
        author: 'টেন মিনিট স্কুল',
        price: 550,
        image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&auto=format&fit=crop&q=80',
        slug: 'hsc-26-bangla-2nd-master-book'
    },
    {
        id: 'p3',
        title: 'HSC 26 ইংরেজি প্রথম পত্র: মাস্টার বুক',
        author: 'টেন মিনিট স্কুল',
        price: 650,
        image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=300&auto=format&fit=crop&q=80',
        slug: 'hsc-26-english-1st-master-book'
    },
    {
        id: 'p4',
        title: 'HSC 26 তথ্য ও যোগাযোগ প্রযুক্তি: মাস্টার বুক',
        author: 'টেন মিনিট স্কুল',
        price: 550,
        image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=300&auto=format&fit=crop&q=80',
        slug: 'hsc-26-ict-master-book'
    },
    {
        id: 'p5',
        title: 'HSC 26 পদার্থবিজ্ঞান প্রথম পত্র: মাস্টার বুক',
        author: 'টেন মিনিট স্কুল',
        price: 650,
        image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&auto=format&fit=crop&q=80',
        slug: 'hsc-26-physics-1st-master-book'
    }
];

export const PreOrderSection = () => {
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
                <h2 className="text-lg font-bold text-slate-900">প্রি-অর্ডার</h2>
                <Link to="/products?filter=preorder" className="text-xs font-semibold text-red-600 hover:underline">
                    সবগুলো দেখুন
                </Link>
            </div>

            {/* Carousel */}
            <div className="relative group">
                <div
                    ref={scrollRef}
                    className="flex items-stretch gap-4 overflow-x-auto no-scrollbar scroll-smooth py-2"
                >
                    {PRE_ORDER_BOOKS.map((book) => (
                        <div
                            key={book.id}
                            className="flex-shrink-0 w-36 sm:w-44 flex flex-col justify-between group/card"
                        >
                            <div>
                                {/* Book Cover */}
                                <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden bg-surface-100 mb-2 border border-surface-200">
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                    <span className="absolute top-1.5 right-1.5 bg-amber-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
                                        PRE-ORDER
                                    </span>
                                </div>

                                {/* Title & Publisher */}
                                <Link to={`/products/${book.slug}`}>
                                    <h3 className="text-xs sm:text-sm font-semibold text-slate-800 line-clamp-2 hover:text-primary-900 leading-snug">
                                        {book.title}
                                    </h3>
                                </Link>
                                <p className="text-[11px] text-slate-400 mt-1 truncate">{book.author}</p>
                            </div>

                            {/* Price */}
                            <div className="mt-2 flex items-baseline gap-1.5">
                                <span className="text-sm font-bold text-red-600">৳{book.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll Navigation */}
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