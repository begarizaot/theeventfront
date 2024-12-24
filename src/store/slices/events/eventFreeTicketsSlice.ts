import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  data: [],
  analytic: [],
  pagination: {},
  loading: false,
  error: null,
};

export const eventFreeTicketsSlice = createSlice({
  name: "eventFreeTickets",
  initialState,
  reducers: {
    eventsFreesInic(state) {
      state.loading = true;
      state.error = null;
      state.data = [];
      state.analytic = [];
    },
    eventsFreesStart(state) {
      state.loading = true;
      state.error = null;
      state.pagination = {};
    },
    eventsFreesSuccess(
      state,
      action: PayloadAction<{ data: any; analytic: any; pagination: any }>
    ) {
      state.data = action.payload.data;
      state.analytic = action.payload.analytic;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    eventsFreesFailure(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
      state.data = [];
      state.analytic = [];
    },
  },
});

export const {
  eventsFreesInic,
  eventsFreesStart,
  eventsFreesSuccess,
  eventsFreesFailure,
} = eventFreeTicketsSlice.actions;
