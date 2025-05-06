export interface InitialEvent {
  eventDate: EventData[] | null;
  loading: boolean;
  error: string;
}

export interface EventRes {
  data: EventData[];
  status: boolean;
}

export interface EventData {
  id: number;
  documentId: string;
  id_event: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: any;
  name: string;
  url_image: string;
  slug: string;
  following: number;
  isVisible: boolean;
  start_date: string;
  end_date: string;
  isEndDate: boolean;
  description: Description[];
  url_youtube: string[];
  urls_images_advertising: string[];
  url_map: string;
  event_tickets_ids: EventTicketsId[];
  categories_id: any;
  event_locations_id: EventLocationsId;
  event_restriction_id: EventRestrictionId;
  event_status_id: EventStatusId;
  users_id: UsersId;
}

export interface Description {
  type: string;
  children: Children[];
}

export interface Children {
  text: string;
  type: string;
}

export interface EventTicketsId {
  id: number;
  documentId: string;
  title: string;
  description: any;
  price: number;
  isTable: boolean;
  start_date: string;
  limit: number;
  end_date: string;
}

export interface EventLocationsId {
  id: number;
  documentId: string;
  title: string;
  formatted_address: string;
  place_id: string;
  url: string;
  location: Location;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: any;
  vicinity: string;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface EventRestrictionId {
  id: number;
  documentId: string;
  title: string;
  order: number;
}

export interface EventStatusId {
  id: number;
  documentId: string;
  title: string;
}

export interface UsersId {
  id: number;
  documentId: string;
  phoneNumber: string;
  email: string;
  country_id: CountryId;
}

export interface CountryId {
  id: number;
  documentId: string;
  name: string;
  code: string;
}
