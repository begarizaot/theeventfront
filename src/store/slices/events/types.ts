import { Event } from "../../interfaces/EventsInterfaces";

export interface EventsState {
  events: Event[];
  searchResults: Event[];
  myEvents: Event[];
  pagination: any;
  selectedEvent: Event | null;
  loading: boolean;
  searchLoading: boolean;
  myEventLoading: boolean;
  error: string | null;
  myEventError: string | null;
}

export interface EventsListInterf {
  events: Event[];
  pagination: any;
}
