// import React, { useState, useEffect } from 'react';
// import {
//     ChevronLeft, ChevronRight, Sparkles, ArrowRight,
//     Pause, Play, ShieldCheck, Flame, Compass, Crown
// } from 'lucide-react';

// const SLIDES = [
//     {
//         id: 1,
//         tagline: 'রয়্যাল অ্যালকোহল-ফ্রি কালেকশন',
//         title: 'বিশুদ্ধ ডিহন আল ওউদ ও রয়েল আতর',
//         subtitle: 'মধ্যপ্রাচ্যের ঐতিহ্যবাহী খাঁটি সুবাসে আপনার ব্যক্তিত্বকে করে তুলুন আরও আভিজাত্যপূর্ণ ও আকর্ষণীয়।',
//         badge: 'এক্সক্লুসিভ কালেকশন',
//         badgeIcon: Crown,
//         bgGradient: 'from-slate-950 via-emerald-950 to-slate-900',
//         accentColor: 'from-amber-200 via-amber-300 to-yellow-500',
//         ctaPrimary: 'কালেকশন এক্সপ্লোর করুন',
//         link: '/products?category=attar',
//         image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1400',
//         highlightText: '১০০% অরজিনাল কন্সেন্ট্রেটেড পারফিউম অয়েল'
//     },
//     {
//         id: 2,
//         tagline: 'নান্দনিক লিভিং স্পেস',
//         title: 'মডার্ন মিনিমালিস্ট হোম ডেকোর',
//         subtitle: 'আপনার ঘরের প্রতিটি কোণকে আধুনিক ও নান্দনিক রূপ দিতে হ্যান্ডক্রাফটেড সেরামিক ও মেটাল ডেকোর আইটেম।',
//         badge: 'নিউ অ্যারাইভাল',
//         badgeIcon: Sparkles,
//         bgGradient: 'from-stone-950 via-slate-900 to-amber-950',
//         accentColor: 'from-amber-100 via-orange-200 to-amber-400',
//         ctaPrimary: 'ডেকোর আইটেম দেখুন',
//         link: '/products?category=home-decor',
//         image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1400',
//         highlightText: 'প্রিমিয়াম কোয়ালিটি এবং আধুনিক ফিনিশিং'
//     },
//     {
//         id: 3,
//         tagline: 'প্রশান্তিদায়ক অ্যারোমাকোলজি',
//         title: 'লাক্সারি ডিফিউজার ও সুগন্ধি ক্যান্ডেল',
//         subtitle: 'দীর্ঘদিনের ক্লান্তি দূর করে ঘরে আনুন প্রশান্তিময় ফ্র্যাগ্রেন্সের পরিবেশ ও নান্দনিক আলো।',
//         badge: 'ট্রেন্ডিং স্টাইলিং',
//         badgeIcon: Compass,
//         bgGradient: 'from-slate-950 via-purple-950 to-slate-900',
//         accentColor: 'from-purple-200 via-pink-200 to-amber-300',
//         ctaPrimary: 'শপ ক্যান্ডেলস',
//         link: '/products?category=candles-diffusers',
//         image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=1400',
//         highlightText: 'ন্যাচারাল সোয়াক্স ও প্রিমিয়াম অ্যারোমা'
//     },
//     {
//         id: 4,
//         tagline: 'অভিজাত উপহারের অভিজ্ঞতা',
//         title: 'এক্সক্লুসিভ লাক্সারি ফ্র্যাগ্রেন্স গিফট বক্স',
//         subtitle: 'প্রিয়জনকে বিশেষ দিনে উপহার দেওয়ার জন্য রয়্যাল প্যাকেজিং সহ সেরা আতর ও পারফিউম সেট।',
//         badge: 'গিফট স্পেশাল',
//         badgeIcon: ShieldCheck,
//         bgGradient: 'from-slate-950 via-amber-950 to-slate-900',
//         accentColor: 'from-amber-200 via-yellow-300 to-amber-500',
//         ctaPrimary: 'গিফট বক্স দেখুন',
//         link: '/products?category=gift-boxes',
//         image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=1400',
//         highlightText: 'কাস্টমাইজড প্রিমিয়াম প্যাকেজিং'
//     },
//     {
//         id: 5,
//         tagline: 'ট্রেন্ডিং হোম-স্টাইলিং',
//         title: 'নর্ডিক আর্ট ও অ্যাম্বিয়েন্ট লাইটিং',
//         subtitle: 'ওয়ার্ম লাইটিং এবং নান্দনিক কাঠের লাইটিং ফিক্সচার যা আপনার ঘরকে করবে আরও আকর্ষণীয়।',
//         badge: 'বিশেষ ছাড়',
//         badgeIcon: Flame,
//         bgGradient: 'from-slate-950 via-teal-950 to-slate-900',
//         accentColor: 'from-teal-200 via-emerald-200 to-amber-300',
//         ctaPrimary: 'লাইটিং আইটেম দেখুন',
//         link: '/products?category=lighting',
//         image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=1400',
//         highlightText: 'ওয়ারেন্টি সহ ১০০% অরিজিনাল প্রোডাক্ট'
//     }
// ];

// export const HeroSlider = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isPlaying, setIsPlaying] = useState(true);

//     // অটো-প্লে সময় বাড়িয়ে ৮ সেকেন্ড (8000ms) করা হয়েছে যেন স্লাইড ধীরে পরিবর্তন হয়
//     useEffect(() => {
//         if (!isPlaying) return;
//         const timer = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//         }, 8000);
//         return () => clearInterval(timer);
//     }, [isPlaying]);

//     const prevSlide = () => {
//         setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
//     };

//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     };

//     return (
//         <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-8">
//             {/* Royal Frame with Golden Glow Outer Boundary */}
//             <div className="relative h-[380px] sm:h-[460px] md:h-[520px] w-full overflow-hidden rounded-3xl">

//                 {SLIDES.map((slide, index) => {
//                     const isActive = index === currentSlide;
//                     const BadgeIcon = slide.badgeIcon;

//                     return (
//                         <div
//                             key={slide.id}
//                             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'
//                                 }`}
//                         >
//                             {/* Full Background Cover Image with Soft Overlay & Zoom-In Ken Burns Animation */}
//                             <div className="absolute inset-0 overflow-hidden">
//                                 <img
//                                     src={slide.image}
//                                     alt={slide.title}
//                                     className={`w-full h-full object-cover object-center transform transition-transform duration-[8000ms] ease-out ${isActive ? 'scale-110' : 'scale-100'
//                                         }`}
//                                 />
//                                 {/* Gradient Masks for Cinematic Effect */}
//                                 <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-90 backdrop-blur-[2px]`} />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
//                             </div>

//                             {/* Glowing Decorative Background Orbs */}
//                             <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
//                             <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

//                             {/* Main Content Layout */}
//                             <div className="h-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 flex items-center justify-between gap-8 relative z-10">

//                                 {/* Left Side: Dynamic Text Content */}
//                                 <div className="max-w-2xl space-y-4 sm:space-y-6">

//                                     {/* Badge & Tagline */}
//                                     <div className="flex items-center gap-3 flex-wrap">
//                                         <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-amber-500/20 to-amber-700/20 backdrop-blur-md border border-amber-500/30 rounded-full shadow-lg">
//                                             <BadgeIcon className="w-3.5 h-3.5 text-amber-400" />
//                                             <span className="text-amber-300 text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
//                                                 {slide.badge}
//                                             </span>
//                                         </div>
//                                         <span className="text-slate-300/80 text-xs font-light tracking-widest uppercase hidden sm:inline-block">
//                                             • {slide.tagline}
//                                         </span>
//                                     </div>

//                                     {/* Headline with Gold/Metallic Accent */}
//                                     <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight drop-shadow-md">
//                                         <span className={`bg-gradient-to-r ${slide.accentColor} bg-clip-text text-transparent`}>
//                                             {slide.title}
//                                         </span>
//                                     </h1>

//                                     {/* Subtitle */}
//                                     <p className="text-xs sm:text-base text-slate-300/90 max-w-xl font-light leading-relaxed line-clamp-2 sm:line-clamp-3">
//                                         {slide.subtitle}
//                                     </p>

//                                     {/* Buttons & Highlights */}
//                                     <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-5">
//                                         <a
//                                             href={slide.link}
//                                             className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 text-xs sm:text-sm font-extrabold px-8 py-4 rounded-2xl shadow-[0_10px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_35px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:-translate-y-1"
//                                         >
//                                             <span>{slide.ctaPrimary}</span>
//                                             <ArrowRight className="w-4 h-4" />
//                                         </a>

//                                         <div className="hidden md:flex items-center gap-2 text-slate-300 text-xs border-l border-amber-500/30 pl-4 py-1">
//                                             <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
//                                             <span>{slide.highlightText}</span>
//                                         </div>
//                                     </div>

//                                 </div>

//                                 {/* Right Side: Royal Glassmorphism Image Preview Box */}
//                                 <div className="hidden lg:block w-4/12 h-[78%] relative group">
//                                     <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/40 via-yellow-400/20 to-amber-600/40 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>

//                                     <div className="relative w-full h-full rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-900/60 backdrop-blur-md">
//                                         <img
//                                             src={slide.image}
//                                             alt={slide.title}
//                                             className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
//                                         />
//                                         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     );
//                 })}

//                 {/* Glassmorphic Navigation Controls Bar */}
//                 <div className="absolute bottom-6 right-6 sm:right-12 z-20 flex items-center gap-4 bg-slate-900/80 backdrop-blur-xl border border-amber-500/20 px-5 py-2.5 rounded-2xl shadow-2xl">

//                     {/* Slide Number Counter */}
//                     <div className="text-xs font-bold text-slate-300 tracking-widest pr-3 border-r border-white/10">
//                         <span className="text-amber-400 text-sm">0{currentSlide + 1}</span>
//                         <span className="text-slate-500"> / 0{SLIDES.length}</span>
//                     </div>

//                     {/* Autoplay Pause / Play Toggle */}
//                     <button
//                         onClick={() => setIsPlaying(!isPlaying)}
//                         className="p-1.5 text-slate-400 hover:text-amber-400 transition-colors"
//                         title={isPlaying ? "Pause" : "Play"}
//                     >
//                         {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
//                     </button>

//                     {/* Previous & Next Buttons */}
//                     <div className="flex items-center gap-1.5 pl-1">
//                         <button
//                             onClick={prevSlide}
//                             className="p-2 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-slate-950 text-white transition-all shadow-sm"
//                             aria-label="Previous Slide"
//                         >
//                             <ChevronLeft className="w-4 h-4" />
//                         </button>
//                         <button
//                             onClick={nextSlide}
//                             className="p-2 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-slate-950 text-white transition-all shadow-sm"
//                             aria-label="Next Slide"
//                         >
//                             <ChevronRight className="w-4 h-4" />
//                         </button>
//                     </div>

//                 </div>

//                 {/* Slow Progress Bar (8 Seconds Duration Indicator) */}
//                 {/* <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/5">
//                     <div
//                         className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 transition-all duration-[8000ms] linear"
//                         style={{
//                             width: isPlaying ? '100%' : `${((currentSlide + 1) / SLIDES.length) * 100}%`,
//                             key: currentSlide
//                         }}
//                     />
//                 </div> */}

//             </div>
//         </section>
//     );
// };



import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- DATA SOURCE ---
const HERO_SLIDES = [
    {
        id: 1,
        title: "Admission Battlefield Homepage",
        desktopImg: "https://wafilife-media-backend.wafilife.com/2026/09/admission-desktop (1)-mtprqens-3xww.jpg",
        mobileImg: "https://wafilife-media-backend.wafilife.com/2026/09/mobile (21)-mtprqlqs-0s9l.jpg",
        link: "#"
    },
    {
        id: 2,
        title: "Hajj Mart Offer Homepage",
        desktopImg: "https://wafilife-media-backend.wafilife.com/2026/07/Desktop (1)-mr321eqe-qti4.jpg",
        mobileImg: "https://wafilife-media-backend.wafilife.com/2026/07/mobile-mr321m5n-t46r.jpg",
        link: "#"
    },
    {
        id: 3,
        title: "Ek Nojore Quran",
        desktopImg: "https://wafilife-media-backend.wafilife.com/2026/08/eknojor-desktop-mszz7dp9-qmcd.jpg",
        mobileImg: "https://wafilife-media-backend.wafilife.com/2026/08/mobile-mszz7ms3-vtdl.jpg",
        link: "#"
    }
];



export const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto Slider Timer (8 seconds delay)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    };

    return (
        <main className="relative grow pt-6" style={{ WebkitOverflowScrolling: 'touch' }}>

            {/* --- HERO SLIDER SECTION --- */}
            <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-40">
                <div className="mt-0 mb-8 xl:mb-10">
                    <div className="relative">
                        <div className="overflow-hidden hero-embla_hero mx-auto">
                            <div
                                className="flex hero-embla_hero_container transition-transform duration-700 ease-in-out"
                                style={{ transform: `translate3d(-${currentSlide * 100}%, 0px, 0px)` }}
                            >
                                {HERO_SLIDES.map((slide) => (
                                    <div key={slide.id} className="hero-embla_hero_slide shrink-0 w-full relative">
                                        <div className="mx-auto overflow-hidden rounded-md">
                                            <div className="group flex justify-center relative overflow-hidden cursor-pointer">
                                                {/* Desktop Image */}
                                                <img
                                                    alt={slide.title}
                                                    width="1840"
                                                    height="370"
                                                    className="bg-fill-thumbnail object-cover w-full hidden md:block"
                                                    src={slide.desktopImg}
                                                />
                                                {/* Mobile Image */}
                                                <img
                                                    alt={slide.title}
                                                    width="450"
                                                    height="520"
                                                    className="bg-fill-thumbnail object-cover w-full block md:hidden"
                                                    src={slide.mobileImg}
                                                />
                                                {/* Shine Effect */}
                                                <div className="absolute top-0 block w-1/2 h-full transform -skew-x-12 ltr:-left-full rtl:-right-full z-5 bg-linear-to-r from-transparent to-white opacity-30 group-hover:animate-shine" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Carousel Arrow Controls */}
                        <div className="hidden md:block">
                            <button
                                onClick={handlePrev}
                                className="hero-embla_hero_prev flex -left-4 top-1/2 z-10 -translate-y-1/2 p-2 w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer items-center justify-center rounded-full bg-white hover:bg-emerald-600 hover:text-white absolute transition duration-300 focus:outline-none transform shadow-md"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-7 h-7 flex hero-embla_hero_next -right-4 top-1/2 z-10 -translate-y-1/2 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer items-center justify-center rounded-full bg-white hover:bg-emerald-600 hover:text-white absolute transition duration-300 focus:outline-none transform shadow-md"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </main>
    );
}