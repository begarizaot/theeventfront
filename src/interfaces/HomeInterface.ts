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
  locale: any;
  eventCarruselItem: EventCarruselItem[];
  categories: Category[];
}

export interface EventCarruselItem {
  id: number;
  isVisible: boolean;
  title: string;
  description: Description[];
  btn: any;
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

export interface Category {
  id: number;
  isVisible: boolean;
  category_id: CategoryId;
}

export interface CategoryId {
  id: number;
  documentId: string;
  title: string;
  url_image: string;
  slug: any;
}

export interface Meta {}
