import { EventAgeRestriction } from "./EventAgeRestrictionInterfaces";
import { EventCategory } from "./EventCategoryInterfaces";
import { Image } from "./ImageInterfaces";
import { Map } from "./MapInterfaces";
import { Organizer } from "./OrganizerInterfaces";
import { StatusEvent } from "./StatusEventInterfaces";
import { TicketType } from "./TicketTypeInterfaces";

export interface EventListPage {
  data: Event[];
  pagination: Pagination;
  message: string;
  status: boolean;
}

export interface EventDetail {
  data: Event;
  message: string;
  status: boolean;
}

export interface Event {
  id: number;
  contact_phone: string;
  description: string;
  event_name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  id_event: string;
  venue?: string;
  start_date?: string;
  end_date?: string;
  youtube_url?: string;
  visitCount?: string;
  organizer_id: Organizer;
  event_age_restriction_id: EventAgeRestriction;
  status_event_id: StatusEvent;
  event_category_id: EventCategory;
  image: Image[];
  map_id?: Map;
  minValue: number;
  maxValue: number;
  ticketType: TicketType[];
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
