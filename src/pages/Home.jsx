import React from 'react';
import { HeroSlider } from '../components/home/HeroSlider';
import { CategoryGroupGrid } from '../components/home/CategoryGroupGrid';
import { NewArrivalsSection } from '../components/home/NewArrivalsSection';
import { SafeFoodCategories } from '../components/home/SafeFoodCategories';
import { TrendingBooksSection } from '../components/home/TrendingBooksSection';
import { PreOrderSection } from '../components/home/PreOrderSection';

export const Home = () => {
    return (
        <div className="bg-surface-50 min-h-screen flex flex-col justify-between">
            <main className="space-y-4 pb-12">
                <HeroSlider />
                <CategoryGroupGrid />
                <NewArrivalsSection />
                <SafeFoodCategories />
                <TrendingBooksSection />
                <PreOrderSection />
            </main>
        </div>
    );
};