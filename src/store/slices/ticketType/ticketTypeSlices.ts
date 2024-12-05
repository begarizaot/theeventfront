import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TicketTypeInterf, TicketTypeState } from "./types";

const initialState: TicketTypeState = {
  ticketTypes: [],
  pagination: {},
  loading: false,
  error: null,
};

export const ticketTypeSlice = createSlice({
  name: "ticketType",
  initialState,
  reducers: {
    ticketTypeStart(state) {
      state.loading = true;
      state.error = null;
    },
    ticketTypeSuccess(state, action: PayloadAction<TicketTypeInterf>) {
      state.ticketTypes = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    ticketTypeFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { ticketTypeStart, ticketTypeSuccess, ticketTypeFailure } =
  ticketTypeSlice.actions;
