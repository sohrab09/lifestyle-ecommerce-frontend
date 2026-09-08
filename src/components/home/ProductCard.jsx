import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ShoppingBag, Star } from 'lucide-react';
import { addToCart } from '../../store/slices/cartSlice';

export const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="group bg-white rounded-xl border border-surface-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div className="relative aspect-square overflow-hidden bg-surface-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
                {product.discount > 0 && (
                    <span className="absolute top-2 left-2 bg-accent-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
                        -{product.discount}%
                    </span>
                )}
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-1 text-xs text-amber-500 mb-1">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-medium">{product.rating}</span>
                        <span className="text-slate-400">({product.reviewCount})</span>
                    </div>

                    <Link to={`/products/${product.slug}`}>
                        <h3 className="font-semibold text-slate-800 text-sm md:text-base line-clamp-2 hover:text-primary-900 transition-colors">
                            {product.name}
                        </h3>
                    </Link>
                </div>

                <div className="mt-4 pt-3 border-t border-surface-100 flex items-center justify-between">
                    <div>
                        <div className="text-base font-bold text-primary-900">৳{product.price}</div>
                        {product.previousPrice && (
                            <div className="text-xs text-slate-400 line-through">৳{product.previousPrice}</div>
                        )}
                    </div>

                    <button
                        onClick={() => dispatch(addToCart({ product, quantity: 1 }))}
                        className="p-2 rounded-lg bg-surface-100 text-slate-700 hover:bg-primary-900 hover:text-white transition-colors"
                        title="Add to Cart"
                    >
                        <ShoppingBag className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};