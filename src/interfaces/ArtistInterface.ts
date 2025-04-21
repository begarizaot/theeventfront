export interface InitialArtist {
  artistDate: ArtistData[] | null;
  loading: boolean;
  error: string;
}

export interface ArtistRes {
  data: ArtistData[];
  status: boolean;
}

export interface ArtistData {
  id: number;
  documentId: string;
  id_artist: string;
  name: string;
  description: any;
  url_image: string;
  url_spotify: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: any;
  events_ids: EventsId[];
}

export interface EventsId {
  id: number;
  id_event: number;
  documentId: string;
  name: string;
  url_image: string;
  start_date: string;
  event_locations_id: EventLocationsId;
}

export interface EventLocationsId {
  id: number;
  documentId: string;
  vicinity: string;
}
