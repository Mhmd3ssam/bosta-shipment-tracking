import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    language: "ar",
  },
  reducers: {
    cahngeLanguage: (state, { payload }) => {
      state.language = payload;
    },
  },
});

export const { cahngeLanguage } = appSlice.actions;
export const appSelector = (state) => state.app;
