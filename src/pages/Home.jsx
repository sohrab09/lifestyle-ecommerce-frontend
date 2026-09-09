import { HeroSlider } from '../components/home/HeroSlider';
import { CategoryGroupGrid } from '../components/home/CategoryGroupGrid';
import { ProductCard } from '../components/home/ProductCard';
import { Sparkles, Flame, ShieldCheck, ArrowRight, Star, ChevronRight } from 'lucide-react';
import { NewBooksSlider } from '../components/home/NewBooksSlider';

export const Home = () => {
    // প্রিমিয়াম আতর ডামি ডাটা
    const featuredAttars = [
        {
            id: 'attar-1',
            name: 'Dehn Al Oudh Royale (Premium Grade)',
            category: 'Attar / Perfume',
            price: 2450,
            oldPrice: 2850,
            discount: '14%',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=400',
        },
        {
            id: 'attar-2',
            name: 'Velvet Rose & Amber Concentrated Oil',
            category: 'Attar / Perfume',
            price: 1350,
            oldPrice: 1600,
            discount: '15%',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=400',
        },
        {
            id: 'attar-3',
            name: 'Musk Al Ghazal Signature Collection',
            category: 'Attar / Perfume',
            price: 1800,
            oldPrice: 2100,
            discount: '14%',
            rating: 5.0,
            image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=400',
        },
        {
            id: 'attar-4',
            name: 'White Oud Pure Concentrated Attar 6ml',
            category: 'Attar / Perfume',
            price: 1150,
            oldPrice: 1350,
            discount: '15%',
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=400',
        },
    ];

    // হোম ডেকোর ও ট্রেন্ডিং স্টাইলিং ডামি ডাটা
    const homeDecorProducts = [
        {
            id: 'decor-1',
            name: 'Handcrafted Minimalist Ceramic Flower Vase',
            category: 'Home Decor Items',
            price: 1650,
            oldPrice: 1950,
            discount: '15%',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=400',
        },
        {
            id: 'decor-2',
            name: 'Nordic Warm LED Atmosphere Table Lamp',
            category: 'Trending Home-Styling',
            price: 2850,
            oldPrice: 3400,
            discount: '16%',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400',
        },
        {
            id: 'decor-3',
            name: 'Luxury Velvet Embroidered Prayer Mat',
            category: 'Home Decor Items',
            price: 1450,
            oldPrice: 1750,
            discount: '17%',
            rating: 5.0,
            image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=400',
        },
        {
            id: 'decor-4',
            name: 'Aesthetic Wooden Wall Clock Minimalist',
            category: 'Trending Home-Styling',
            price: 2100,
            oldPrice: 2500,
            discount: '16%',
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=400',
        },
    ];

    const CATEGORIES = [
        {
            title: "একাডেমিক",
            viewAllLink: "/cat/books/subject/academic",
            items: [
                { name: "ইউনিভার্সিটি", img: "https://category-image.wafilife.com/2025/08/university-mefplsft-9t58.png", link: "/cat/books/subject/university" },
                { name: "একাদশ-দ্বাদশ শ্রেণি (এইচএসসি)", img: "https://category-image.wafilife.com/2025/08/download (1)-mefphil7-s8ql.png", link: "/cat/books/subject/class-11-and-12-hsc" },
                { name: "কারিগরি", img: "https://category-image.wafilife.com/2025/08/karigori-mefpeg5u-0bm5.png", link: "/cat/books/subject/polytechnic" },
                { name: "মেডিকেল", img: "https://wafilife-media.wafilife.com/uploads/2024/08/download-2025-07-05T124624.909-192x254.jpg", link: "/cat/books/subject/medical" }
            ]
        },
        {
            title: "শিশু-কিশোর বই",
            viewAllLink: "/cat/books/subject/শিশু-কিশোরদের-বই",
            items: [
                { name: "শিশু-কিশোর", img: "https://wafilife-media.wafilife.com/uploads/2025/02/WhatsApp-Image-2025-02-12-at-10.10.41-PM-192x254.jpeg", link: "#" },
                { name: "বয়স যখন ০-৪", img: "https://wafilife-media.wafilife.com/uploads/2022/01/eta-ki-series-2-192x254.png", link: "#" },
                { name: "বয়স যখন ১২-১৭", img: "https://wafilife-media.wafilife.com/uploads/2019/02/Untitled-1-192x254.png", link: "#" },
                { name: "বয়স যখন ৪-৮", img: "https://wafilife-media.wafilife.com/uploads/2021/10/Amar_Saradin_2-192x254.png", link: "#" }
            ]
        },
        {
            title: "ইতিহাস ও ঐতিহ্য",
            viewAllLink: "/cat/books/subject/history-and-traditions",
            items: [
                { name: "ইতিহাস ও সংস্কৃতি", img: "https://wafilife-media.wafilife.com/uploads/2022/09/Bipingonj-192x254.jpg", link: "#" },
                { name: "দেশভিত্তিক ইতিহাস", img: "https://wafilife-media.wafilife.com/uploads/2021/08/ফিলিস্তিন-ইতিহাসের-চার-হাজার-বছর-192x254.jpg", link: "#" },
                { name: "প্রত্নতাত্ত্বিক ইতিহাস", img: "https://wafilife-media.wafilife.com/uploads/2021/05/Cow-to-Crypocurrency-TK-280-scaled-192x254.jpg", link: "#" },
                { name: "প্রাচীন সভ্যতার ইতিহাস", img: "https://wafilife-media.wafilife.com/uploads/2022/02/Prithibir-samrajjo-1-192x254.png", link: "#" }
            ]
        },
        {
            title: "কওমি মাদ্রাসা",
            viewAllLink: "/cat/books/subject/qawmi-madrasa",
            items: [
                { name: "আদব বিভাগ", img: "https://wafilife-media.wafilife.com/uploads/2024/07/Cover-adabun-nabi-outlinedপেপ-02-800x800-1-192x254.jpg", link: "#" },
                { name: "আরবি ও উর্দু অভিধান", img: "https://wafilife-media.wafilife.com/uploads/2022/09/1000025466-copy-192x254.jpg", link: "#" },
                { name: "আরবি ব্যাকরণ", img: "https://wafilife-media.wafilife.com/uploads/2023/07/Muyallimut_Tarkib_oyat_Tarjama-Maolana_Shohidul_Islam-940a5-305753-192x254.jpg", link: "#" },
                { name: "উলুমুল হাদিস বিভাগ", img: "https://wafilife-media.wafilife.com/uploads/2024/02/image-1-copy-2-192x254.jpg", link: "#" }
            ]
        }
    ];

    const containerStyle = "mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-40";

    return (
        <div className="bg-surface-50 min-h-screen flex flex-col justify-between">
            <main className="space-y-10 pb-12">

                {/* 1. Hero Banner Slider */}
                <HeroSlider />

                {/* --- CATEGORIES SECTION --- */}
                <div className="bg-[#f1f2f5] py-6 lg:py-8">
                    <div className={containerStyle}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {CATEGORIES.map((cat, idx) => (
                                <div key={idx} className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg p-4 md:p-6 flex flex-col justify-between h-full">
                                    <div>
                                        <h2 className="text-lg md:text-xl font-bold mb-3 border-b pb-2 text-slate-800">{cat.title}</h2>
                                        <div className="grid grid-cols-2 gap-3 my-4">
                                            {cat.items.map((item, itemIdx) => (
                                                <a key={itemIdx} href={item.link} className="flex flex-col items-center group">
                                                    <div className="flex h-20 w-full items-center justify-center p-2 bg-[#f8f9fa] rounded group-hover:bg-emerald-50 transition-colors">
                                                        <img alt={item.name} loading="lazy" className="max-h-full max-w-full object-contain" src={item.img} />
                                                    </div>
                                                    <span className="text-xs font-medium text-center truncate w-full text-slate-700 group-hover:text-emerald-600 pt-2 transition-colors">
                                                        {item.name}
                                                    </span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                    <a className="pt-2 text-emerald-600 font-semibold text-sm flex items-center justify-end gap-1 hover:underline" href={cat.viewAllLink}>
                                        সব দেখুন
                                        <ChevronRight className="w-4 h-4" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- NEW RELEASES SECTION --- */}

                <NewBooksSlider />

                {/* 2. Value Propositions / Features */}
                <section className={containerStyle}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-800">১০০% আসল পণ্য</h4>
                                <p className="text-[10px] text-slate-500">প্রিমিয়াম কোয়ালিটি গ্যারান্টি</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-800">অরজিনাল অ্যারোমা</h4>
                                <p className="text-[10px] text-slate-500">দীর্ঘস্থায়ী সুবাসের আতর</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                                <Flame className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-800">ট্রেন্ডিং কালেকশন</h4>
                                <p className="text-[10px] text-slate-500">আধুনিক হোম-স্টাইলিং</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl">
                                <Star className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-800">ক্যাশ অন ডেলিভারি</h4>
                                <p className="text-[10px] text-slate-500">সারা বাংলাদেশে ডেলিভারি</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Category Group Grid Showcase */}
                <div className={containerStyle}>
                    <CategoryGroupGrid />
                </div>

                {/* 4. Section: Premium Attar & Perfumes */}
                <section className={containerStyle}>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-1">
                                <Sparkles className="w-4 h-4" />
                                <span>Luxury Fragrances</span>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                                প্রিমিয়াম আতর ও পারফিউম
                            </h2>
                        </div>
                        <button className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:underline">
                            <span>সব দেখুন</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {featuredAttars.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>

                {/* 5. Promotional Mid-Banner */}
                {/* <section className={containerStyle}>
                    <div className="relative rounded-2xl overflow-hidden bg-linear-to-r from-slate-900 via-slate-800 to-emerald-950 text-white p-8 sm:p-12 shadow-xl">
                        <div className="max-w-md space-y-3 z-10 relative">
                            <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase px-3 py-1 rounded-full border border-emerald-500/30">
                                Exclusive Collection
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                                আপনার ঘরকে সাজান নান্দনিক সব হোম-ডেকোর দিয়ে
                            </h3>
                            <p className="text-slate-300 text-xs sm:text-sm">
                                আধুনিক ট্রেন্ডিং হোম-স্টাইলিং পণ্যগুলিতে পাচ্ছেন ১৫% পর্যন্ত বিশেষ ছাড়।
                            </p>
                            <button className="mt-2 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors shadow-md">
                                <span>শপ নাও</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </section> */}

                {/* 6. Section: Home Decor & Trending Styling */}
                <section className={containerStyle}>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider mb-1">
                                <Flame className="w-4 h-4" />
                                <span>Trending Living</span>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                                হোম ডেকোর ও স্টাইলিং আইটেমস
                            </h2>
                        </div>
                        <button className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:underline">
                            <span>সব দেখুন</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {homeDecorProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>

            </main>
        </div>
    );
};