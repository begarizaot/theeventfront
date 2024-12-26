import { configureStore } from "@reduxjs/toolkit";
import {
  eventsSlice,
  ticketTypeSlice,
  ticketSlice,
  eventAnalyticsSlice,
  myEventsSlice,
  teamAccessSlice,
  eventsSearchSlices,
  eventFreeTicketsSlice,
  eventDiscountCodeSlice,
} from "./slices";

const store = configureStore({
  reducer: {
    events: eventsSlice.reducer,
    eventAnalytics: eventAnalyticsSlice.reducer,
    eventFreeTickets: eventFreeTicketsSlice.reducer,
    eventDiscountCode: eventDiscountCodeSlice.reducer,
    eventsSearch: eventsSearchSlices.reducer,
    myEvents: myEventsSlice.reducer,
    ticketType: ticketTypeSlice.reducer,
    ticket: ticketSlice.reducer,
    teamAccess: teamAccessSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
