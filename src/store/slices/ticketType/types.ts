import { TicketType } from "../../interfaces/TicketTypeInterfaces";

export interface TicketTypeState {
  ticketTypes: TicketType[];
  pagination: any;
  loading: boolean;
  error: string | null;
}

export interface TicketTypeInterf {
  data: TicketType[];
  pagination: any;
}
