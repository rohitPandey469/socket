import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

export const API_URL = "https://socket-ki5o.onrender.com";
// export const API_URL = "http://localhost:5000"

const socket = io(API_URL);

export const fetchLinks = createAsyncThunk("links/fetchLinks", async () => {
  const response = await axios.get(`${API_URL}/api/links`);
  return response.data;
});

export const linksSlice = createSlice({
  name: "links",
  initialState: [],
  reducers: {
    removeLink: (state, action) =>
      state.filter((link) => link._id !== action.payload),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLinks.fulfilled, (state, action) => action.payload);
  },
});

export const { removeLink } = linksSlice.actions;
export default linksSlice.reducer;

// Event Call Made from backend
export const setupSocketListeners = (store) => {
  console.log("Server Emitted the linkRemoved Event")
  socket.on("linkRemoved", (id) => {
    store.dispatch(removeLink(id));
  });
};
