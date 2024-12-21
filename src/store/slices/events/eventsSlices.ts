import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  loading: false,
  error: null,
  pagination: {},
  selectedEvent: null,
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    eventsStart(state) {
      state.loading = true;
      state.error = null;
    },
    eventsSuccess(
      state,
      action: PayloadAction<{ events: any; pagination: any }>
    ) {
      state.events = action.payload.events;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    eventsFailure(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
    selectEvent(state, action) {
      state.selectedEvent = action.payload;
      state.loading = false;
    },
  },
});

export const { eventsStart, eventsSuccess, eventsFailure, selectEvent } =
  eventsSlice.actions;
