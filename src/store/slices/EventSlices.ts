import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { EventData, InitialEvent } from "../../interfaces/EventsInterface";

const initialState: InitialEvent = {
  eventDate: null,
  loading: true,
  error: "",
};

// -------------------------------------------------------------------------------
export const eventHomeSlices = createSlice({
  name: "eventHome",
  initialState,
  reducers: {
    eventHomeStart(state) {
      state.loading = true;
      state.error = "";
    },
    eventHomeSuccess(state, action: PayloadAction<EventData[]>) {
      state.eventDate = action.payload;
      state.loading = false;
    },
    eventHomeFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { eventHomeStart, eventHomeSuccess, eventHomeFailure } = eventHomeSlices.actions;
// -------------------------------------------------------------------------------
