import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GlobalData, InitialGlobal } from "../../interfaces/GlobalInterface";

const initialState: InitialGlobal = {
  globalDate: null,
  loading: true,
  error: "",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    globalStart(state) {
      state.loading = true;
      state.error = "";
    },
    globalSuccess(state, action: PayloadAction<GlobalData>) {
      state.globalDate = action.payload;
      state.loading = false;
    },
    globalFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { globalStart, globalSuccess, globalFailure } =
  globalSlice.actions;
