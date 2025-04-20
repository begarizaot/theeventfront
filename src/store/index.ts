import { configureStore } from "@reduxjs/toolkit";
import { globalSlice, homeSlice } from "./slices";

const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
    home: homeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
