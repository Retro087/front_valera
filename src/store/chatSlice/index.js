import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

export const getMessages = createAsyncThunk("chat/get", async () => {
  return api.chatAPI.getMessages();
});

export const sendMessage = createAsyncThunk("chat/send", async (message) => {
  debugger;
  return api.chatAPI.sendMessage(message);
});

const initialState = {
  messages: [],
  err: null,
  load: false,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendMessage.fulfilled, (state, action) => {
      debugger;
      state.messages.push(action.payload.message);

      state.load = false;
    });
    builder.addCase(getMessages.fulfilled, (state, action) => {
      debugger;
      state.messages = action.payload.chats;

      state.load = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = chatSlice.actions;

export default chatSlice.reducer;
