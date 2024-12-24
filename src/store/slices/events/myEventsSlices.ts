import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  myEvents: [],
  myEventLoading: false,
  myEventError: null,
  pagination: {},
};

export const myEventsSlice = createSlice({
  name: "myEvents",
  initialState,
  reducers: {
    myEventsStart(state) {
      state.myEventLoading = true;
      state.myEvents = [];
      state.myEventError = null;
    },
    myEventsSuccess(
      state,
      action: PayloadAction<{ data: any; pagination: any }>
    ) {
      state.myEvents = action.payload.data;
      state.pagination = action.payload.pagination;
      state.myEventLoading = false;
    },
    myEventsFailure(state, action: PayloadAction<any>) {
      state.myEventError = action.payload;
      state.myEventLoading = false;
    },
  },
});

export const { myEventsStart, myEventsSuccess, myEventsFailure } =
  myEventsSlice.actions;
