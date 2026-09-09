import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SAFE_FOOD_ITEMS = [
    { id: 'sf1', name: 'Dates (Khejur)', image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=200&auto=format&fit=crop&q=80', slug: 'dates' },
    { id: 'sf2', name: 'Grain Food', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&auto=format&fit=crop&q=80', slug: 'grain-food' },
    { id: 'sf3', name: 'Honey', image: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?w=200&auto=format&fit=crop&q=80', slug: 'honey' },
    { id: 'sf4', name: 'Nuts', image: 'https://images.unsplash.com/photo-1536591375315-1988d6960922?w=200&auto=format&fit=crop&q=80', slug: 'nuts' },
    { id: 'sf5', name: 'Oil', image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=200&auto=format&fit=crop&q=80', slug: 'oil' },
    { id: 'sf6', name: 'Organic And Herbal...', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&auto=format&fit=crop&q=80', slug: 'organic-herbal' },
    { id: 'sf7', name: 'Sauces & Pickles', image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=200&auto=format&fit=crop&q=80', slug: 'sauces-pickles' },
    { id: 'sf8', name: 'Spice & Powder', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&auto=format&fit=crop&q=80', slug: 'spice-powder' },
];

export const SafeFoodCategories = () => {
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
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-900">সেইফ ফুড</h2>
                <Link to="/products?category=food" className="text-xs font-semibold text-red-600 hover:underline">
                    সবগুলো দেখুন
                </Link>
            </div>

            {/* Circle Items Carousel */}
            <div className="relative group">
                <div
                    ref={scrollRef}
                    className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth py-2"
                >
                    {SAFE_FOOD_ITEMS.map((item) => (
                        <Link
                            key={item.id}
                            to={`/products?category=${item.slug}`}
                            className="flex-shrink-0 flex flex-col items-center group/item text-center w-24 sm:w-28"
                        >
                            {/* Circular Soft Background Badge */}
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-50/60 p-3 flex items-center justify-center transition-transform duration-300 group-hover/item:scale-105 border border-slate-100">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-contain"
                                    loading="lazy"
                                />
                            </div>

                            {/* Title */}
                            <span className="text-xs font-medium text-slate-700 mt-2 line-clamp-1 group-hover/item:text-primary-900">
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Scroll Controls */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white border border-surface-200 text-slate-700 p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    aria-label="Previous"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white border border-surface-200 text-slate-700 p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    aria-label="Next"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </section>
    );
};