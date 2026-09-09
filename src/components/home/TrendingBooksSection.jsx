import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TRENDING_BOOKS = [
    {
        id: 't1',
        title: 'আর রাহীকুল মাখতুম',
        author: 'আল্লামা ছফিয়ুর রহমান...',
        price: 535,
        previousPrice: 710,
        discount: 25,
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&auto=format&fit=crop&q=80',
        slug: 'ar-raheeq-al-makhtoom'
    },
    {
        id: 't2',
        title: 'আমানি বার্থ : প্রাকৃতিক পদ্ধতিতে মা হওয়ার উপায়',
        author: 'আইশা আল হাজ্জার',
        price: 435,
        previousPrice: 580,
        discount: 25,
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&auto=format&fit=crop&q=80',
        slug: 'amani-birth'
    },
    {
        id: 't3',
        title: 'আমার নবি মুহাম্মদ (সা)',
        author: 'জাকারিয়া মাসুদ',
        price: 562.5,
        previousPrice: 750,
        discount: 25,
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&auto=format&fit=crop&q=80',
        slug: 'amar-nabi-muhammad'
    },
    {
        id: 't4',
        title: 'ঈমানদীপ্ত দাস্তান (১ম-৮ম খণ্ড)',
        author: 'এনায়েতুল্লাহ আলতামাশ',
        price: 1256,
        previousPrice: 2240,
        discount: 43,
        image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&auto=format&fit=crop&q=80',
        slug: 'imandipto-dastan'
    },
    {
        id: 't5',
        title: 'আসহা্বে রাসুলের জীবনকথা (১ম-৭ম খণ্ড)',
        author: 'ড. মুহাম্মদ আব্দুল মাবুদ',
        price: 2088,
        previousPrice: 2900,
        discount: 28,
        image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&auto=format&fit=crop&q=80',
        slug: 'ashabe-rasuler-jibonkotha'
    },
    {
        id: 't6',
        title: 'আল-মু\'জামুল ওয়াসীত্ব (আধুনিক আরবি-বাংলা...',
        author: 'ড. মুহাম্মদ ফজলুর রহমান',
        price: 578,
        previousPrice: 680,
        discount: 15,
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&auto=format&fit=crop&q=80',
        slug: 'al-mujamul-waseet'
    }
];

export const TrendingBooksSection = () => {
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
                <h2 className="text-lg font-bold text-slate-900">ট্রেন্ডিং বই</h2>
                <Link to="/products?filter=trending" className="text-xs font-semibold text-red-600 hover:underline">
                    সবগুলো দেখুন
                </Link>
            </div>

            {/* Carousel Wrapper */}
            <div className="relative group">
                <div
                    ref={scrollRef}
                    className="flex items-stretch gap-4 overflow-x-auto no-scrollbar scroll-smooth py-2"
                >
                    {TRENDING_BOOKS.map((book) => (
                        <div
                            key={book.id}
                            className="flex-shrink-0 w-36 sm:w-44 flex flex-col justify-between group/card"
                        >
                            <div>
                                {/* Book Cover with Discount Badge */}
                                <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden bg-surface-100 mb-2">
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                    {book.discount > 0 && (
                                        <div className="absolute top-1.5 left-1.5 bg-red-600 text-white text-[10px] font-bold w-8 h-8 rounded-full flex flex-col items-center justify-center leading-none shadow">
                                            <span>{book.discount}%</span>
                                            <span className="text-[7px] uppercase">OFF</span>
                                        </div>
                                    )}
                                </div>

                                {/* Title & Author */}
                                <Link to={`/products/${book.slug}`}>
                                    <h3 className="text-xs sm:text-sm font-semibold text-slate-800 line-clamp-2 hover:text-primary-900 leading-snug">
                                        {book.title}
                                    </h3>
                                </Link>
                                <p className="text-[11px] text-slate-400 mt-1 truncate">{book.author}</p>
                            </div>

                            {/* Price Row */}
                            <div className="mt-2 flex items-baseline gap-1.5">
                                <span className="text-sm font-bold text-red-600">৳{book.price}</span>
                                {book.previousPrice && (
                                    <span className="text-xs text-slate-400 line-through">৳{book.previousPrice}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll Buttons */}
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