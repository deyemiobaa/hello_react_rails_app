import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const fetchMessage = createAsyncThunk(
  "messages/fetchMessages",
  async () => {
    const response = await fetch("/api/messages");
    const { message } = await response.json();
    return message;
  }
);

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    message: '',
  },
  reducers: {},
  extraReducers: {
    [fetchMessage.fulfilled]: (state, action) => {
      state.message = action.payload;
    }
  }
});

export default messageSlice.reducer;