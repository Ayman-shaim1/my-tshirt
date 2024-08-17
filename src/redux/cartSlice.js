import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // or whatever initial state makes sense for your cart
};

const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {

    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload.id);
    },
    // add more reducers as needed
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
