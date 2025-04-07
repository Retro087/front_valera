import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

export const getCart = createAsyncThunk("cart/get", async (userId) => {
  return api.cartAPI.getCart(userId);
});

export const deleteCart = createAsyncThunk("cart/delete", async (id) => {
  return api.cartAPI.deleteCart(id);
});

export const addToCart = createAsyncThunk(
  "cart/add",
  async ({ userId, quantity, flowerId }) => {
    return api.cartAPI.addToCart(userId, quantity, flowerId);
  }
);

const initialState = {
  list: [],
  amount: null,
  load: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.list = action.payload.cartItems;
      state.amount = action.payload.totalAmount;
      state.load = false;
    });
    builder.addCase(deleteCart.fulfilled, (state, action) => {
      debugger;
      state.list = state.list.filter(
        (i) => Number(i.id) !== Number(action.payload)
      );
      state.load = false;
    });
    builder.addCase(getCart.pending, (state) => {
      state.load = true;
    });
    builder.addCase(getCart.rejected, (state, err) => {
      state.err = err.error.message;
      state.load = false;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.list.push(action.payload.cartItem);
      state.load = false;
    });
    builder.addCase(addToCart.pending, (state) => {
      state.load = true;
    });
    builder.addCase(addToCart.rejected, (state, err) => {
      state.err = err;
      state.load = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = cartSlice.actions;

export default cartSlice.reducer;
