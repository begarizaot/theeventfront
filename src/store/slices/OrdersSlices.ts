import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialOrder } from "../../interfaces/OrderInterface";

const initialState: InitialOrder = {
  ordersDate: null,
  loading: true,
  error: "",
};

// -------------------------------------------------------------------------------
export const myOrdersSlices = createSlice({
  name: "myOrders",
  initialState,
  reducers: {
    myOrdersStart(state) {
      state.loading = true;
      state.error = "";
      state.ordersDate = null;
    },
    myOrdersSuccess(state, action: PayloadAction<any[]>) {
      state.ordersDate = action.payload;
      state.loading = false;
    },
    myOrdersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { myOrdersStart, myOrdersSuccess, myOrdersFailure } =
  myOrdersSlices.actions;
// -------------------------------------------------------------------------------