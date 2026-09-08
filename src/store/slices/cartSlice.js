import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    shippingFee: 60, // Standard Inside Dhaka Fee in BDT
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { product, quantity = 1 } = action.payload;
            const existing = state.items.find((item) => item.id === product.id);
            if (existing) {
                existing.quantity += quantity;
            } else {
                state.items.push({ ...product, quantity });
            }
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find((i) => i.id === id);
            if (item && quantity > 0) {
                item.quantity = quantity;
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice;
export default cartSlice.reducer;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartSubtotal = (state) =>
    state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
export const selectCartTotalCount = (state) =>
    state.cart.items.reduce((count, item) => count + item.quantity, 0);