import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // রাউটের পাত (pathname) চেঞ্জ হলেই পেজের স্ক্রল একবারে উপরে নিয়ে যাবে
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' // অথবা 'smooth' দিতে পারেন
        });
    }, [pathname]);

    return null; // এটি কোনো UI রেন্ডার করবে না
};