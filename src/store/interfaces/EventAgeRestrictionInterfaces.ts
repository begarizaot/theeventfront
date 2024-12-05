export interface EventAgeRestrictionRes {
  data: EventAgeRestriction;
  message: string;
  status: boolean;
}

export interface EventAgeRestriction {
  id: number;
  name: string;
}
