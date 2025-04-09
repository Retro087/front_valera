import { configureStore } from "@reduxjs/toolkit";
import flowersSlice from "./flowersSlice/flowersSlice";
import authSlice from "./authSlice/authSlice";
import cartSlice from "./cartSlice/cartSlice";
import orderSlice from "./orderSlice/orderSlice";
import chatSlice from "./chatSlice";

export const store = configureStore({
  reducer: {
    flowers: flowersSlice,
    auth: authSlice,
    cart: cartSlice,
    order: orderSlice,
    chat: chatSlice,
  },
});
