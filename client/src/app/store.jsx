import { configureStore } from "@reduxjs/toolkit";
import linksReducer from "../features/linksSlice";

export const store = configureStore({
  reducer: {
    links: linksReducer,
  },
});

export default store;
