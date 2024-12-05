export interface EventCategoryRes {
  data: EventCategory;
  message: string;
  status: boolean;
}

export interface EventCategory {
  id: number;
  name: string;
}
