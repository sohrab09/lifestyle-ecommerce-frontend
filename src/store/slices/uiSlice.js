import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isMobileMenuOpen: false,
        isCartDrawerOpen: false,
    },
    reducers: {
        toggleMobileMenu: (state) => {
            state.isMobileMenuOpen = !state.isMobileMenuOpen;
        },
        setMobileMenu: (state, action) => {
            state.isMobileMenuOpen = action.payload;
        },
        toggleCartDrawer: (state) => {
            state.isCartDrawerOpen = !state.isCartDrawerOpen;
        },
        setCartDrawer: (state, action) => {
            state.isCartDrawerOpen = action.payload;
        },
    },
});

export const { toggleMobileMenu, setMobileMenu, toggleCartDrawer, setCartDrawer } = uiSlice.actions;
export default uiSlice.reducer;