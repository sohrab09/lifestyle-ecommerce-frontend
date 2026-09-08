import { apiSlice } from './api';
import { MOCK_PRODUCTS } from '../constants/mockData';

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            queryFn: async ({ category, search, sortBy } = {}) => {
                // Simulating API Latency for local mock execution
                await new Promise((res) => setTimeout(res, 300));
                let filtered = [...MOCK_PRODUCTS];

                if (category) {
                    filtered = filtered.filter((p) => p.category === category);
                }
                if (search) {
                    const q = search.toLowerCase();
                    filtered = filtered.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
                }
                if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
                if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);

                return { data: filtered };
            },
            providesTags: ['Product'],
        }),
        getProductBySlug: builder.query({
            queryFn: async (slug) => {
                await new Promise((res) => setTimeout(res, 200));
                const product = MOCK_PRODUCTS.find((p) => p.slug === slug);
                if (product) return { data: product };
                return { error: { status: 404, data: 'Product not found' } };
            },
            providesTags: (result, error, slug) => [{ type: 'Product', id: slug }],
        }),
    }),
});

export const { useGetProductsQuery, useGetProductBySlugQuery } = productApi;