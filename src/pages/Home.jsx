import React from 'react';
import { HeroSlider } from '../components/home/HeroSlider';
import { useGetProductsQuery } from '../services/productApi';
import { ProductCard } from '../components/home/ProductCard';

export const Home = () => {
    const { data: products = [], isLoading } = useGetProductsQuery();

    return (
        <div className="space-y-6 pb-12">
            {/* Banner Slider */}
            <HeroSlider />

            {/* Featured Products */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl font-bold text-slate-800 mb-4">সবশেষ পণ্যসমূহ</h2>
                {isLoading ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="h-64 bg-surface-200 animate-pulse rounded-xl" />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};