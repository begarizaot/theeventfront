import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  data: [],
  analytic: [],
  pagination: {},
  loading: false,
  error: null,
};

export const eventDiscountCodeSlice = createSlice({
  name: "eventDiscountCode",
  initialState,
  reducers: {
    eventsDiscountInic(state) {
      state.loading = true;
      state.error = null;
      state.data = [];
      state.analytic = [];
    },
    eventsDiscountStart(state) {
      state.loading = true;
      state.error = null;
      state.pagination = {};
    },
    eventsDiscountSuccess(
      state,
      action: PayloadAction<{ data: any; analytic: any; pagination: any }>
    ) {
      state.data = action.payload.data;
      state.analytic = action.payload.analytic;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    eventsDiscountFailure(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
      state.data = [];
      state.analytic = [];
    },
  },
});

export const {
  eventsDiscountInic,
  eventsDiscountStart,
  eventsDiscountSuccess,
  eventsDiscountFailure,
} = eventDiscountCodeSlice.actions;
