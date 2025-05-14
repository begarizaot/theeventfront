import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface InitialAdmin {
  adminDate: any | null;
  loading: boolean;
  error: string;
}

const initialState: InitialAdmin = {
  adminDate: null,
  loading: true,
  error: "",
};

export const adminSlices = createSlice({
  name: "admin",
  initialState,
  reducers: {
    adminStart(state) {
      state.loading = true;
      state.error = "";
      state.adminDate = null;
    },
    adminSuccess(state, action: PayloadAction<any>) {
      state.adminDate = action.payload;
      state.loading = false;
    },
    adminFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { adminStart, adminSuccess, adminFailure } = adminSlices.actions;
