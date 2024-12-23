import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: [],

  loading: false,
};

export const teamAccessSlice = createSlice({
  name: "teamAccess",
  initialState,
  reducers: {
    teamAccessInic(state) {
      state.loading = true;
      state.data = [];
    },
    teamAccessStart(state) {
      state.loading = true;
    },
    teamAccessSuccess(state, action: PayloadAction<{ data: any }>) {
      state.data = action.payload.data;
      state.loading = false;
    },
    teamAccessFailure(state) {
      state.loading = false;
      state.data = [];
    },
  },
});

export const {
  teamAccessFailure,
  teamAccessInic,
  teamAccessStart,
  teamAccessSuccess,
} = teamAccessSlice.actions;
