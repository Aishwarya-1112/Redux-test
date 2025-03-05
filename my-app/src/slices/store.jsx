// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./UserSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
