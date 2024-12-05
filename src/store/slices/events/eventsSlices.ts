import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventsListInterf, EventsState } from "./types";

const initialState: EventsState = {
  events: [],
  myEvents: [],
  searchResults: [],
  pagination: {},
  selectedEvent: null,
  loading: false,
  searchLoading: false,
  myEventLoading: false,
  error: null,
  myEventError: null,
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    eventsStart(state) {
      state.loading = true;
      state.error = null;
    },
    myEventsStart(state) {
      state.myEventLoading = true;
      state.myEvents = [];
      state.myEventError = null;
    },
    searctEventsStart(state) {
      state.searchLoading = true;
      state.error = null;
    },
    eventsSuccess(state, action: PayloadAction<EventsListInterf>) {
      state.events = action.payload.events;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    myEventsSuccess(state, action: PayloadAction<EventsListInterf>) {
      state.myEvents = action.payload.events;
      state.pagination = action.payload.pagination;
      state.myEventLoading = false;
    },
    searchEventsSuccess(state, action: PayloadAction<EventsListInterf>) {
      state.searchResults = action.payload.events;
      state.searchLoading = false;
    },
    eventsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    myEventsFailure(state, action: PayloadAction<string>) {
      state.myEventError = action.payload;
      state.myEventLoading = false;
    },
    searchEventsClear(state) {
      state.searchResults = [];
      state.searchLoading = false;
    },
    selectEvent(state, action) {
      state.selectedEvent = action.payload;
      state.loading = false;
    },
  },
});

export const {
  eventsStart,
  eventsSuccess,
  eventsFailure,
  myEventsStart,
  myEventsSuccess,
  myEventsFailure,
  selectEvent,
  searchEventsClear,
  searchEventsSuccess,
  searctEventsStart,
} = eventsSlice.actions;
