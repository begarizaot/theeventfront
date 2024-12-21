import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  analytic: [],
  pagination: {},
  loading: false,
  error: null,
};

export const eventAnalyticsSlice = createSlice({
  name: "eventAnalytics",
  initialState,
  reducers: {
    eventsAnalyticsInic(state) {
      state.loading = true;
      state.error = null;
      state.data = [];
      state.analytic = [];
    },
    eventsAnalyticsStart(state) {
      state.loading = true;
      state.error = null;
      state.pagination = {};
    },
    eventsAnalyticsSuccess(
      state,
      action: PayloadAction<{ data: any; analytic: any; pagination: any }>
    ) {
      state.data = action.payload.data;
      state.analytic = action.payload.analytic;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    eventsAnalyticsFailure(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
      state.data = [];
      state.analytic = [];
    },
  },
});

export const {
  eventsAnalyticsInic,
  eventsAnalyticsStart,
  eventsAnalyticsSuccess,
  eventsAnalyticsFailure,
} = eventAnalyticsSlice.actions;
