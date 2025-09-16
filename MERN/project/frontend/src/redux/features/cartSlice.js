import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        final_total: 0,
        original_total: 0
    },
    reducers: {
        addtoCart: (state, { payload }) => {
            const { productId, finalPrice, originalPrice } = payload

            const existingItem = state.items.find((item) => item.productId == productId);
            if (existingItem) {
                existingItem.qty++
            } else {
                state.items.push({ productId: productId, qty: 1 });
            }
            state.final_total += finalPrice;
            state.original_total += originalPrice;
            localStorage.setItem("cart", JSON.stringify(state))
        },
        lstoCart: (state) => {
            const cart = JSON.parse(localStorage.getItem("cart"));
            if (cart) {
                state.items = cart.items;
                state.final_total = cart.final_total;
                state.original_total = cart.original_total

            }

        }
    },
})

// Action creators are generated for each case reducer function
export const { addtoCart, lstoCart } = cartSlice.actions

export default cartSlice.reducer