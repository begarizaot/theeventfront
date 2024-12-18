import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TicketState, TicketInterf } from "./types";

const initialState: TicketState = {
  mytickets: [],
  pagination: {},
  selectedTicket: null,
  loading: false,
  error: null,
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    myTicketStart(state) {
      state.loading = true;
      state.error = null;
    },
    myTicketSuccess(state, action: PayloadAction<TicketInterf>) {
      state.mytickets = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    myTicketFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    selectTicket(state, action) {
      state.selectedTicket = action.payload;
      state.loading = false;
    },
  },
});

export const { myTicketStart, myTicketSuccess, myTicketFailure, selectTicket } =
  ticketSlice.actions;
