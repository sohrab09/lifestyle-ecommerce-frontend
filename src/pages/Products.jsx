import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { CartSuccessModal } from '../components/common/CartSuccessModal';
import { ProductFilterSidebar } from '../components/product/ProductFilterSidebar';

const SUB_CATEGORIES = [
    'ইউনিভার্সিটি',
    'একাদশ-দ্বাদশ শ্রেণি (এইচএসসি)',
    'অনার্স',
    'মেডিকেল',
    'স্কুল',
    'মাদ্রাসা',
    'ইঞ্জিনিয়ারিং',
    'ভর্তি, নিয়োগ ও প্রস্তুতি পরীক্ষা'
];

const PRODUCTS = [
    {
        id: 1,
        title: 'HSC 26 বাংলা প্রথম পত্র: মাস্টার বুক',
        author: 'টেন মিনিট স্কুল',
        price: 750,
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&auto=format&fit=crop&q=80',
        slug: 'hsc-26-bangla-1st'
    },
    {
        id: 2,
        title: 'HSC 26 বাংলা দ্বিতীয় পত্র: মাস্টার বুক',
        author: 'টেন মিনিট স্কুল',
        price: 550,
        image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&auto=format&fit=crop&q=80',
        slug: 'hsc-26-bangla-2nd'
    },
    {
        id: 3,
        title: 'HSC 26 ইংরেজি প্রথম পত্র: মাস্টার বুক',
        author: 'টেন মিনিট স্কুল',
        price: 650,
        image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=300&auto=format&fit=crop&q=80',
        slug: 'hsc-26-english-1st'
    },
    {
        id: 4,
        title: 'HSC 26 ইংরেজি দ্বিতীয় পত্র: মাস্টার বুক',
        author: 'টেন মিনিট স্কুল',
        price: 450,
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&auto=format&fit=crop&q=80',
        slug: 'hsc-26-english-2nd'
    },
    {
        id: 5,
        title: 'HSC 26 তথ্য ও যোগাযোগ প্রযুক্তি: মাস্টার বুক',
        author: 'টেন মিনিট স্কুল',
        price: 500,
        image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=300&auto=format&fit=crop&q=80',
        slug: 'hsc-26-ict'
    },
    {
        id: 6,
        title: 'HSC 26 পদার্থবিজ্ঞান প্রথম পত্র: মাস্টার বুক',
        author: 'টেন মিনিট স্কুল',
        price: 650,
        image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&auto=format&fit=crop&q=80',
        slug: 'hsc-26-physics-1st'
    }
];

export const Products = () => {
    const [priceRange, setPriceRange] = useState([0, 30000]);
    const [selectedPublisher, setSelectedPublisher] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('');
    const [sortBy, setSortBy] = useState('new');

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOrderNow = (product) => {
        console.log("product", product)
        // কার্টে অ্যাড করার লজিক এখানে কল করতে পারেন
        setIsModalOpen(true);
    };

    return (
        <div className="bg-slate-50 min-h-screen py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb Navigation */}
                <nav className="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
                    <Link to="/" className="hover:text-red-600">বই</Link>
                    <span>›</span>
                    <span className="text-slate-800 font-medium">একাডেমিক</span>
                </nav>

                <h1 className="text-xl font-bold text-slate-900 mb-4">একাডেমিক</h1>

                {/* Sub Category Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                    {SUB_CATEGORIES.map((cat, index) => (
                        <button
                            key={index}
                            className="p-2.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-700 hover:border-red-500 hover:text-red-600 transition-all text-center shadow-sm"
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col lg:flex-row gap-6">

                    {/* Sidebar */}
                    <ProductFilterSidebar
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        selectedPublisher={selectedPublisher}
                        setSelectedPublisher={setSelectedPublisher}
                        selectedTopic={selectedTopic}
                        setSelectedTopic={setSelectedTopic}
                    />

                    {/* Product Listing Main View */}
                    <main className="flex-1">

                        {/* Header / Sort Bar */}
                        <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                            <span className="text-xs font-semibold text-slate-600">
                                {PRODUCTS.length * 1630} Items Found
                            </span>

                            <div className="flex items-center gap-2 text-xs">
                                <span className="text-slate-500">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="bg-white border border-slate-200 rounded px-2.5 py-1 text-slate-700 focus:outline-none focus:border-red-500"
                                >
                                    <option value="new">New Released</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                </select>
                            </div>
                        </div>

                        {/* Product Cards Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
                            {PRODUCTS.map((product) => (
                                <div
                                    key={product.id}
                                    className="group relative bg-white rounded-md border border-slate-200 p-2 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                                >
                                    <div>
                                        {/* Image Wrapper with Hover Overlay */}
                                        <div className="relative aspect-3/4 w-full rounded overflow-hidden bg-slate-100 mb-2">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />

                                            {/* Hover Overlay Button */}
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                                                <button
                                                    onClick={() => handleOrderNow(product)}
                                                    className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2 px-3 rounded-md shadow-md flex items-center justify-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                                                >
                                                    <ShoppingCart className="w-3.5 h-3.5" />
                                                    <span>অর্ডার করুন</span>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Title & Author */}
                                        <Link to={`/products/${product.slug}`}>
                                            <h3 className="text-xs font-semibold text-slate-800 line-clamp-2 hover:text-red-600 leading-snug">
                                                {product.title}
                                            </h3>
                                        </Link>
                                        <p className="text-[10px] text-slate-400 mt-1">{product.author}</p>
                                    </div>

                                    {/* Price */}
                                    <div className="mt-2">
                                        <span className="text-xs font-bold text-red-600">৳{product.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </main>
                </div>

            </div>

            {/* Cart Success Popup Modal */}
            <CartSuccessModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};