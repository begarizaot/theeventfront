// import { configureStore } from "@reduxjs/toolkit";

// import { eventDetailSlice, eventListSlice } from "./slices/events";
// import { ticketTypeListSlice } from "./slices";

// export const store = configureStore({
//   reducer: {
//     eventsListPage: eventListSlice.reducer,
//     eventDetail: eventDetailSlice.reducer,
//     // ticketType
//     ticketTypeList: ticketTypeListSlice.reducer,
//   },
// });

// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { eventsSlice, ticketTypeSlice } from "./slices";

const store = configureStore({
  reducer: {
    events: eventsSlice.reducer,
    ticketType: ticketTypeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
