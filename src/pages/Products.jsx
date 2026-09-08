import React, { useState } from 'react';
import { useGetProductsQuery } from '../services/productApi';
import { ProductCard } from '../components/home/ProductCard';

export const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortBy, setSortBy] = useState('');

    const { data: products = [], isLoading, isError } = useGetProductsQuery({
        category: selectedCategory,
        sortBy: sortBy,
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-6">Our Collection</h1>

            {/* Filter and Sort Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-white p-4 rounded-xl border border-surface-200">
                <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-slate-700">Category:</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border border-surface-200 bg-surface-50 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-primary-900"
                    >
                        <option value="">All Categories</option>
                        <option value="attar">Attar</option>
                        <option value="home-decor">Home Decor</option>
                        <option value="skincare">Skincare</option>
                        <option value="lifestyle">Lifestyle</option>
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-slate-700">Sort By:</label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border border-surface-200 bg-surface-50 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-primary-900"
                    >
                        <option value="">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                    </select>
                </div>
            </div>

            {/* Product Listing */}
            {isLoading ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="h-72 bg-surface-200 animate-pulse rounded-xl" />
                    ))}
                </div>
            ) : isError ? (
                <div className="text-center py-12 text-red-600">
                    Failed to load products. Please try again later.
                </div>
            ) : products.length === 0 ? (
                <div className="text-center py-12 text-slate-500">
                    No products found matching your filters.
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};