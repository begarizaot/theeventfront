import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:any = {
  data: [],
  analytic: [],
  pagination: {},
  loading: false,
  error: null,
};

export const eventTicketControlSlice = createSlice({
  name: "eventTicketControl",
  initialState,
  reducers: {
    eventsTicketControlInic(state) {
      state.loading = true;
      state.error = null;
      state.data = [];
      state.analytic = [];
    },
    eventsTicketControlStart(state) {
      state.loading = true;
      state.error = null;
      state.pagination = {};
    },
    eventsTicketControlSuccess(
      state,
      action: PayloadAction<{ data: any; analytic: any; pagination: any }>
    ) {
      state.data = action.payload.data;
      state.analytic = action.payload.analytic;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    eventsTicketControlFailure(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
      state.data = [];
      state.analytic = [];
    },
  },
});

export const {
  eventsTicketControlInic,
  eventsTicketControlStart,
  eventsTicketControlSuccess,
  eventsTicketControlFailure,
} = eventTicketControlSlice.actions;
