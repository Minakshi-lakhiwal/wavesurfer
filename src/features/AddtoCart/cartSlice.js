import { createSlice, current } from "@reduxjs/toolkit";
import { increment } from "../counter/counterSlice";
const initialState = {
  cart: JSON.parse(localStorage.getItem("cartItems")) || [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItemId = action.payload.id;
      const existingItem = state.cart.find((item) => item.id === newItemId);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push(action.payload);
        let cartData = JSON.stringify(current(state.cart));
        localStorage.setItem("cartItems", cartData);
      }
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
  },
});
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
