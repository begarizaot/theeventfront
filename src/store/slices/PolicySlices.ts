import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  policyDate: null,
  loading: true,
  error: "",
};

export const policySlices = createSlice({
  name: "policy",
  initialState,
  reducers: {
    policyStart(state) {
      state.loading = true;
      state.error = "";
      state.policyDate = null;
    },
    policySuccess(state, action: PayloadAction<any>) {
      state.policyDate = action.payload;
      state.loading = false;
    },
    policyFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { policyStart, policySuccess, policyFailure } =
  policySlices.actions;
