export interface TicketState {
  mytickets: any[];
  selectedTicket: any;
  pagination: any;
  loading: boolean;
  error: string | null;
}

export interface TicketInterf {
  data: any[];
  pagination: any;
}
