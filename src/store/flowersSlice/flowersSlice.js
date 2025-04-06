import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

export const getFlowers = createAsyncThunk(
  "flowers/get",
  async ({ page = 1, limit = 10 }) => {
    return api.flowersAPI.getFlowers(page, limit);
  }
);

export const getFlowerById = createAsyncThunk("flowers/getById", async (id) => {
  return api.flowersAPI.getFlowerById(id);
});

const initialState = {
  list: [],
  currentFlower: {},
  load: false,
  currentPage: 1,
  limit: 10,
  totalPages: null,
};

export const flowersSlice = createSlice({
  name: "flowers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFlowers.fulfilled, (state, action) => {
      state.list = action.payload.flowers;
      state.currentPage = action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
      state.load = false;
    });

    builder.addCase(getFlowers.pending, (state, action) => {
      state.load = true;
    });
    builder.addCase(getFlowers.rejected, (state, action) => {
      state.load = false;
    });
    builder.addCase(getFlowerById.fulfilled, (state, action) => {
      state.currentFlower = action.payload;

      state.load = false;
    });
    builder.addCase(getFlowerById.pending, (state, action) => {
      state.load = true;
    });
    builder.addCase(getFlowerById.rejected, (state, action) => {
      state.load = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = flowersSlice.actions;

export default flowersSlice.reducer;
