export interface StatusEventRes {
  data: StatusEvent;
  message: string;
  status: boolean;
}

export interface StatusEvent {
  id: number;
  name: string;
}
