import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeData, InitialHome } from "../interfaces/HomeInterface";

const initialState: InitialHome = {
  homeDate: null,
  loading: true,
  error: "",
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    homeStart(state) {
      state.loading = true;
      state.error = "";
    },
    homeSuccess(state, action: PayloadAction<HomeData>) {
      state.homeDate = action.payload;
      state.loading = false;
    },
    homeFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { homeStart, homeSuccess, homeFailure } = homeSlice.actions;
