import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  searchResults: [],
  searchLoading: false,
  pagination: {},
};

export const eventsSearchSlices = createSlice({
  name: "eventsSearch",
  initialState,
  reducers: {
    searctEventsStart(state) {
      state.searchLoading = true;
      state.searchResults = [];
    },
    searchEventsSuccess(
      state,
      action: PayloadAction<{ data: any; pagination: any }>
    ) {
      state.searchResults = action.payload.data;
      state.pagination = action.payload.pagination;
      state.searchLoading = false;
    },
    searchEventsClear(state) {
      state.searchResults = [];
      state.searchLoading = false;
    },
  },
});

export const { searctEventsStart, searchEventsSuccess, searchEventsClear } =
  eventsSearchSlices.actions;
