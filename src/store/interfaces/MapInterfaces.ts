export interface MapRes {
  data: Map;
  message: string;
  status: boolean;
}

export interface Map {
  id: number;
  idMap: string;
  label: string;
  labelCompl: string;
}
