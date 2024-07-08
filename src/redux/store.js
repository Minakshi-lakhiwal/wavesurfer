import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";
import cartReducer from "../features/AddtoCart/cartSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    allCart: cartReducer,
  },
});
