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
      state.eventDate = null;
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

export const { eventHomeStart, eventHomeSuccess, eventHomeFailure } =
  eventHomeSlices.actions;
// -------------------------------------------------------------------------------

const myEventInitialState: InitialEvent = {
  eventDate: null,
  loading: true,
  error: "",
};

export const myEventSlices = createSlice({
  name: "myEvent",
  initialState: myEventInitialState,
  reducers: {
    myEventStart(state) {
      state.loading = true;
      state.error = "";
      state.eventDate = null;
    },
    myEventSuccess(state, action: PayloadAction<EventData[]>) {
      state.eventDate = action.payload;
      state.loading = false;
    },
    myEventFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { myEventStart, myEventSuccess, myEventFailure } =
  myEventSlices.actions;
// -------------------------------------------------------------------------------

const sharedEventInitialState: InitialEvent = {
  eventDate: null,
  loading: true,
  error: "",
};

export const sharedEventSlices = createSlice({
  name: "sharedEvent",
  initialState: sharedEventInitialState,
  reducers: {
    sharedEventStart(state) {
      state.loading = true;
      state.error = "";
      state.eventDate = null;
    },
    sharedEventSuccess(state, action: PayloadAction<EventData[]>) {
      state.eventDate = action.payload;
      state.loading = false;
    },
    sharedEventFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { sharedEventStart, sharedEventSuccess, sharedEventFailure } =
  sharedEventSlices.actions;
// -------------------------------------------------------------------------------
