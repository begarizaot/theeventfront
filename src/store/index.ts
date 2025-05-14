import { configureStore } from "@reduxjs/toolkit";
import {
  adminSlices,
  artistSlices,
  eventHomeSlices,
  globalSlice,
  homeSlice,
  myEventSlices,
  myOrdersSlices,
  sharedEventSlices,
} from "./slices";

const store = configureStore({
  reducer: {
    admin: adminSlices.reducer,
    global: globalSlice.reducer,
    home: homeSlice.reducer,
    eventHome: eventHomeSlices.reducer,
    myEvent: myEventSlices.reducer,
    sharedEvent: sharedEventSlices.reducer,
    artist: artistSlices.reducer,
    myOrders: myOrdersSlices.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
