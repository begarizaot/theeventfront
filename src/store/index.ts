import { configureStore } from "@reduxjs/toolkit";
import {
  artistSlices,
  eventHomeSlices,
  globalSlice,
  homeSlice,
} from "./slices";

const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
    home: homeSlice.reducer,
    eventHome: eventHomeSlices.reducer,
    artist: artistSlices.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
