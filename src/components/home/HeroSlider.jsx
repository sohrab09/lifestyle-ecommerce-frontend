import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
    {
        id: 1,
        title: 'জনতার অফার',
        subtitle: 'দুপুর ১২টা থেকে রাত ১২টা পর্যন্ত বিশেষ ছাড়',
        badge: 'হট ডিল',
        bgGradient: 'from-amber-100 via-orange-50 to-amber-50',
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000',
        ctaText: 'অফার দেখুন',
        link: '/products?offer=true'
    },
    {
        id: 2,
        title: 'প্রিমিয়াম আতার ও ফ্র্যাগ্রেন্স',
        subtitle: '১০০% অ্যালকোহল মুক্ত প্রাকৃতিক পারফিউম অয়েল',
        badge: 'নতুন কালেকশন',
        bgGradient: 'from-emerald-100 via-teal-50 to-emerald-50',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=1000',
        ctaText: 'এখনই কিনুন',
        link: '/products?category=attar'
    }
];

export const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    };

    return (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
            <div className="relative h-[220px] sm:h-[300px] md:h-[380px] w-full overflow-hidden rounded-2xl shadow-sm">
                {SLIDES.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out bg-gradient-to-r ${slide.bgGradient} ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        <div className="h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-6">
                            <div className="max-w-xl space-y-2 md:space-y-4">
                                <span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full">
                                    {slide.badge}
                                </span>
                                <h2 className="text-xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                                    {slide.title}
                                </h2>
                                <p className="text-xs sm:text-base text-slate-600 line-clamp-2">
                                    {slide.subtitle}
                                </p>
                                <div className="pt-2">
                                    <a
                                        href={slide.link}
                                        className="inline-block bg-primary-900 hover:bg-primary-800 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow transition-colors"
                                    >
                                        {slide.ctaText}
                                    </a>
                                </div>
                            </div>

                            <div className="hidden sm:block w-1/2 h-4/5 rounded-xl overflow-hidden shadow-md">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                ))}

                {/* Slider Controls */}
                <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md transition-all"
                    aria-label="Previous Slide"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md transition-all"
                    aria-label="Next Slide"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {SLIDES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`h-2 rounded-full transition-all ${i === currentSlide ? 'w-6 bg-primary-900' : 'w-2 bg-slate-300'
                                }`}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};