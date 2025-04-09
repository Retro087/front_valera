import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

export const createOrder = createAsyncThunk(
  "order/create",
  async ({ userId, paymentData, shippingAddress }) => {
    return api.orderAPI.createOrder(userId, paymentData, shippingAddress);
  }
);

export const getFlowerById = createAsyncThunk(
  "flowers/getById",
  async ({ id, userId }) => {
    debugger;
    return api.flowersAPI.getFlowerById(id, userId);
  }
);

const initialState = {
  orderData: null,
  err: null,
  load: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOrder.fulfilled, (state, action) => {
      debugger;
      state.orderData = action.payload.order;

      state.load = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = orderSlice.actions;

export default orderSlice.reducer;
