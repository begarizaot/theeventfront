export interface InitialHome {
  homeDate: HomeData | null;
  loading: boolean;
  error: string;
}

export interface HomeRes {
  data: HomeData;
  meta: Meta;
}

export interface HomeData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  url_image: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  eventCarruselItem: EventItem[];
}

export interface EventItem {
  id: number;
  isVisible: boolean;
  title: string;
  description: Description[];
  btn: Btn;
}

export interface Description {
  type: string;
  children: Children[];
}

export interface Children {
  text: string;
  type: string;
}

export interface Btn {
  id: number;
  href: any;
  label: string;
  isExternal: boolean;
  isButtonLink: boolean;
  isLogin: boolean;
}

export interface Meta {}
