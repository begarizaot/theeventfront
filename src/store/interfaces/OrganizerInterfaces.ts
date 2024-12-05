export interface OrganizerRes {
  data: Organizer;
  message: string;
  status: boolean;
}

export interface Organizer {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
}
