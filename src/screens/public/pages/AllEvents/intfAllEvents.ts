export interface AllEventsIntf {
  pagination: pagination;
  data: EventIntf[];
}

interface pagination {
  page: any;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface EventIntf {}
