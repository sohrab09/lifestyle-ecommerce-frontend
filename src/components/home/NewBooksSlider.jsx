import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const NEW_RELEASES_BOOKS = [
    {
        id: 114330,
        title: "নাস্তিক বন্ধুর সংঙ্গে সংলাপ",
        author: "ড. মুস্তাফা মাহমুদ",
        discount: "50",
        price: "১৫০৳",
        originalPrice: "৩০০৳",
        img: "https://wafilife-media-v2.wafilife.com/uploads/2026/09/cover-114330-192x288.jpg",
        link: "/nastik-bondhur-songhe-songlap/pd/114330",
        buttonType: "order"
    },
    {
        id: 114192,
        title: "নবিজির সীরাহ ১ম ও ২য় খন্ড",
        author: "মাওলানা যুলফিকার আহমদ নকশবন্দী",
        discount: "35",
        price: "৬৩৭৳",
        originalPrice: "৯৮০৳",
        img: "https://wafilife-media-v2.wafilife.com/uploads/2026/09/pbs-cover-114192-192x288.jpg",
        link: "/nobijir-sirah-1st-and-2nd-part/pd/114192",
        buttonType: "order"
    },
    {
        id: 78000,
        title: "তাকওয়া মুমিনের হাতিয়ার",
        author: "আদিল আব্দুল্লাহ",
        discount: "45",
        price: "১১০৳",
        originalPrice: "২০০৳",
        img: "https://wafilife-media-v2.wafilife.com/uploads/2026/05/whatsapp-image-2026-05-05-at-25730-pm-78000-192x288.jpeg",
        link: "/taqwa-mominiar-hatiyar/pd/78000",
        buttonType: "order"
    },
    {
        id: 114262,
        title: "দ্য ৭ হ্যাবিটস অব হাইলি ইফেকটিভ টিনস",
        author: "শন কোভি",
        discount: "22",
        price: "৪২১৳",
        originalPrice: "৫৪০৳",
        img: "https://wafilife-media-v2.wafilife.com/uploads/2026/09/cover-114262-192x288.jpg",
        link: "/the-7-habits-of-highly-effective-teens/pd/114262",
        buttonType: "order"
    },
    {
        id: 114157,
        title: "রহমতের ফল্গুধারা (১-৪)",
        author: "খালিদ বেগ",
        discount: "50",
        price: "১,০০০৳",
        originalPrice: "২,০০০৳",
        img: "https://wafilife-media.wafilife.com/uploads/2026/08/cover-114157-192x192.jpg",
        link: "/rahmoter-folgudhara-1-4/pd/114157",
        buttonType: "details"
    },
    {
        id: 114155,
        title: "শিক্ষার্থীদের হক ও আমানত",
        author: "কাউসার লাবীব",
        discount: "45",
        price: "১১০৳",
        originalPrice: "২০০৳",
        img: "https://wafilife-media.wafilife.com/uploads/2026/08/img-20260802-wa0017jpg-1-114155-192x288.jpeg",
        link: "/shikkhatider-huq-o-amanot/pd/114155",
        buttonType: "order"
    },
    {
        id: 113969,
        title: "স্বপ্নদেশে নবিজি ﷺ",
        author: "আবু আনাস আব্দুল আজিজ আহমদ আব্দুল আজিজ",
        discount: "25",
        price: "১৭২৳",
        originalPrice: "২৩০৳",
        img: "https://wafilife-media-v2.wafilife.com/uploads/2026/08/cover-113969-192x288.jpg",
        link: "/shopnodeshe-noboji-sm/pd/113969",
        buttonType: "order"
    },
    {
        id: 112327,
        title: "এক উম্মাহ ম্যানিফেস্টো",
        author: "আসিফ মাহতাব উৎস",
        discount: "20",
        price: "৭২০৳",
        originalPrice: "৯০০৳",
        img: "https://wafilife-media-v2.wafilife.com/uploads/2026/08/whatsapp-image-2026-08-08-at-60640-pm-112327-192x288.jpeg",
        link: "/ek-ummah-er-manyfesto/pd/112327",
        buttonType: "order"
    },
    {
        id: 113999,
        title: "তাফসীরুল আইম্মাহ",
        author: "জিয়াউর রহমান মুন্সি",
        discount: "15",
        price: "১,৪০০৳",
        originalPrice: "১,৬৪৮৳",
        img: "https://wafilife-media-v2.wafilife.com/uploads/2026/08/tafseer-al-aimmah-113999-192x288.png",
        link: "/tafsirul-aimmah/pd/113999",
        buttonType: "order"
    },
    {
        id: 112447,
        title: "বেরলভী মতবাদ",
        author: "মুফতী আমীন পালনপুরী",
        discount: "50",
        price: "৩৫০৳",
        originalPrice: "৭০০৳",
        img: "https://wafilife-media-v2.wafilife.com/uploads/2026/08/cover-112447-192x288.jpg",
        link: "/barelovi-motobad/pd/112447",
        buttonType: "order"
    },
    {
        id: 112462,
        title: "হাবিবি ইয়া রাসুলাল্লাহ",
        author: "মাওলানা যুলফিকার আহমদ নকশবন্দী",
        discount: "50",
        price: "২০০৳",
        originalPrice: "৪০০৳",
        img: "https://wafilife-media-v2.wafilife.com/uploads/2026/08/cover-112462-192x288.jpg",
        link: "/habibi-ya-rasulallah/pd/112462",
        buttonType: "order"
    },
    {
        id: 112465,
        title: "শারারাত",
        author: "নাবিলা আযীয",
        discount: "45",
        price: "১৬৫৳",
        originalPrice: "৩০০৳",
        img: "https://wafilife-media-v2.wafilife.com/uploads/2026/08/shararat-112465-192x288.jpg",
        link: "/sararat/pd/112465",
        buttonType: "order"
    },
    {
        id: 112483,
        title: "আল-কুরআনে নৈতিকতা",
        author: "মুহাম্মদ আব্দুল্লাহ দারাজ রাহি",
        discount: "10",
        price: "২৬১৳",
        originalPrice: "২৯০৳",
        img: "https://wafilife-media-v2.wafilife.com/uploads/2026/08/book-cover-112483-192x288.jpeg",
        link: "/al-quran-er-noitikota/pd/112483",
        buttonType: "order"
    },
    {
        id: 112369,
        title: "গল্পে আঁকা ইতিহাস (১-৭)",
        author: "আব্দুল বাসিত বীন সাহাবুদ্দিন",
        discount: "52",
        price: "৫৭৬৳",
        originalPrice: "১,২০০৳",
        img: "https://wafilife-media-v2.wafilife.com/uploads/2026/08/01jpg-112369-192x288.jpeg",
        link: "/golpe-aka-itihas/pd/112369",
        buttonType: "order"
    }
];

export const NewBooksSlider = () => {


    const sliderRef = useRef(null);

    const scroll = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = direction === 'left' ? -350 : 350;
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="my-10 mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-40">
            <div className="my-4 lg:my-9 xl:my-11">

                {/* Section Header */}
                <div className="flex flex-wrap items-start justify-between mb-3 md:mb-4">
                    <div>
                        <h2 className="text-slate-800 text-lg lg:text-xl xl:text-[20px] xl:leading-8 font-semibold">
                            নতুন প্রকাশিত বই
                        </h2>
                    </div>
                    <a
                        href="/cat/books/subject/new-releases-books"
                        className="underline flex items-center justify-center flex-col hover:opacity-80 text-emerald-600"
                    >
                        <span className="font-semibold text-base block">সবগুলো দেখুন</span>
                    </a>
                </div>

                {/* Carousel Container */}
                <div className="relative group">

                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 shadow-md border rounded-full p-2 hidden group-hover:flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-200"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Book Cards Slider */}
                    <div
                        ref={sliderRef}
                        className="flex gap-4 sm:gap-5 md:gap-7 overflow-x-auto scroll-smooth py-2 no-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {NEW_RELEASES_BOOKS.map((book) => (
                            <div
                                key={book.id}
                                className="shrink-0 w-[40%] sm:w-[29%] md:w-45 lg:w-41.25relative"
                            >
                                <article
                                    className="flex flex-col group/card overflow-hidden cursor-pointer transition-all duration-300 h-full z-10"
                                    title={book.title}
                                >
                                    {/* Discount Badge */}
                                    <div className="absolute -top-[2px] -left-0 z-10">
                                        <div
                                            className="bg-no-repeat bg-cover w-[46px] h-[46px] relative flex items-center justify-center"
                                            style={{ backgroundImage: "url('/assets/images/wafi_discount_badge_1-01.svg')" }}
                                        >
                                            <span className="text-white font-bold text-[13px] absolute top-[10px] left-[11px]">
                                                {book.discount}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Book Image */}
                                    <div className="relative shrink-0">
                                        <div className="overflow-hidden mx-auto aspect-[2/3] w-full transition duration-200 ease-in-out transform relative">
                                            <a href={book.link} className="relative block w-full h-full">
                                                <img
                                                    alt={book.title}
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="object-contain w-full h-full absolute top-0 left-0"
                                                    src={book.img}
                                                />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Hover Overlay Button */}
                                    <div className="relative">
                                        <div className="w-full h-full hidden lg:block">
                                            <div className="hidden group-hover/card:block absolute bottom-2 w-full z-20">
                                                <div className="product-count-button-position">
                                                    <button
                                                        className="w-full md:w-[85%] flex items-center mx-auto justify-center rounded-[4px] bg-emerald-600 hover:bg-emerald-700 text-white py-1 focus:outline-none transition-colors shadow-md"
                                                        aria-label="Action Button"
                                                    >
                                                        <a href={book.link} className="w-full">
                                                            <div className="flex items-center justify-center gap-1.5">
                                                                {book.buttonType === "details" ? (
                                                                    <>
                                                                        <Eye className="w-4 h-4" />
                                                                        <span className="text-[12px] md:text-[14px]">বিস্তারিত</span>
                                                                    </>
                                                                ) : (
                                                                    <span className="text-[12px] md:text-[14px]">অর্ডার করুন</span>
                                                                )}
                                                            </div>
                                                        </a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Book Info */}
                                    <div className="flex flex-col pt-2 h-full pb-2">
                                        <div>
                                            <div className="h-11">
                                                <h2 className="text-slate-900 text-[15px] leading-4 sm:text-sm lg:text-[15px] font-semibold line-clamp-2">
                                                    <a href={book.link} className="hover:text-emerald-600 transition-colors">
                                                        {book.title}
                                                    </a>
                                                </h2>
                                            </div>
                                            <a href={book.link}>
                                                <div className="text-slate-500 line-clamp-1 text-sm mt-1" style={{ minHeight: '1.25rem' }}>
                                                    <span>{book.author}</span>
                                                </div>
                                            </a>
                                            <a href={book.link}>
                                                <div className="-mx-1 mt-1">
                                                    <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-emerald-600">
                                                        {book.price}
                                                    </span>
                                                    <del className="mx-1 text-sm text-slate-400">
                                                        {book.originalPrice}
                                                    </del>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                </article>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 shadow-md border rounded-full p-2 hidden group-hover:flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-200"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                </div>

            </div>
        </div>
    );
};