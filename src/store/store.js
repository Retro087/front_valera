import { configureStore } from "@reduxjs/toolkit";
import flowersSlice from "./flowersSlice/flowersSlice";
import authSlice from "./authSlice/authSlice";

export const store = configureStore({
  reducer: {
    flowers: flowersSlice,
    auth: authSlice,
  },
});
