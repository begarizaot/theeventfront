export interface TicketEventsRes {
  data: TicketEventsData[];
  status: boolean;
}

export interface TicketEventsData {
  id: number
  documentId: string
  title: string
  description: any
  price: number
  stock: number
  quantity: number
  limit: number
  isTable: boolean
  isVisible: boolean
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: any
  start_date: string
  end_date: string
}
