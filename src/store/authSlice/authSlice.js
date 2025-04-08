import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

export const fetchAuth = createAsyncThunk("auth/fetch", async (auth) => {
  return api.authAPI.logIn(auth.login, auth.password);
});

export const fetchAuthMe = createAsyncThunk("authMe/fetch", async () => {
  return api.authAPI.authMe();
});

export const fetchReg = createAsyncThunk("reg/fetch", async (auth) => {
  return api.authAPI.reg(auth.login, auth.password, auth.name);
});

const initialState = {
  profile: null,
  isAuth: false,
  isLoading: false,
  err: null,
  myId: null,
  role: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.isAuth = true;
      localStorage.setItem("token", action.payload.token);
      state.myId = action.payload.user.id;
      state.profile = action.payload.user;
      state.role = action.payload.user.role;
      state.load = false;
    });
    builder.addCase(fetchAuth.pending, (state) => {
      state.load = true;
    });
    builder.addCase(fetchAuth.rejected, (state, err) => {
      state.err = err.error.message;
      state.load = false;
    });
    builder.addCase(fetchReg.fulfilled, (state, action) => {
      state.err = action.payload.message;
      state.isAuth = true;
      state.myId = action.payload.user.id;
      state.profile = action.payload.user;
      state.role = action.payload.user.role;
      localStorage.setItem("token", action.payload.token);
      state.load = false;
    });
    builder.addCase(fetchReg.pending, (state) => {
      state.load = true;
    });
    builder.addCase(fetchReg.rejected, (state, err) => {
      state.err = err;
      state.load = false;
    });
    builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
      debugger;
      state.myId = action.payload.user.id;
      state.isAuth = true;
      state.profile = action.payload.user;
      state.role = action.payload.user.role;
      state.load = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = authSlice.actions;

export default authSlice.reducer;
