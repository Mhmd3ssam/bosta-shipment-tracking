import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    language: "ar",
  },
  reducers: {
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
  },
});

export const { setLanguage } = appSlice.actions;
export const appSelector = (state) => state.app;
