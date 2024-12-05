export interface TicketTypeList {
  data: TicketType[];
  pagination: Pagination;
  message: string;
  status: boolean;
}

export interface TicketType {
  price: number;
  id: number;
  name: string;
  description: string;
  max_capacity: number;
  event_capacity: number;
  max_quantity_limit: number;
  min_quantity_limit: number;
  soldOut: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  available: any;
  start_date: any;
  end_date: string;
  color: string;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
