import { configureStore } from "@reduxjs/toolkit";
import {
  eventsSlice,
  ticketTypeSlice,
  ticketSlice,
  eventAnalyticsSlice,
  myEventsSlice,
} from "./slices";
import { eventsSearchSlices } from "./slices/events/eventsSearchSlices";

const store = configureStore({
  reducer: {
    events: eventsSlice.reducer,
    eventAnalytics: eventAnalyticsSlice.reducer,
    eventsSearch: eventsSearchSlices.reducer,
    myEvents: myEventsSlice.reducer,
    ticketType: ticketTypeSlice.reducer,
    ticket: ticketSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
