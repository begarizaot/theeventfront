export interface InitialGlobal {
  globalDate: GlobalData | null;
  loading: boolean;
  error: string;
}

export interface GlobalRes {
  data: GlobalData;
  meta: Meta;
}

export interface GlobalData {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  header: Header
  footer: Footer
  metas: Metas
  colors: Color[]
  url_image_logo: string
}

export interface Header {
  id: number
  logo: Logo
  navItems: NavItem[]
}

export interface Logo {
  id: number
  label: any
  href: string
  isExternal: boolean
  urlImage: string
}

export interface NavItem {
  id: number
  href: string
  label: string
  isExternal: boolean
  isButtonLink: boolean
  type: any
  isLogin: any
}

export interface Footer {
  id: number
  text: string
  logo: Logo2
  navItems: NavItem2[]
  socialLinks: SocialLink[]
}

export interface Logo2 {
  id: number
  label: any
  href: string
  isExternal: boolean
  urlImage: string
}

export interface NavItem2 {
  id: number
  href: string
  label: string
  isExternal: boolean
  isButtonLink: boolean
  type: any
  isLogin?: boolean
}

export interface SocialLink {
  id: number
  label: string
  href: string
  isExternal: boolean
  urlImage: any
}

export interface Metas {
  id: number
  title: string
  description: string
  urlImage: any
  keywords: string
  site_name: string
}

export interface Color {
  id: number
  label: string
  color: string
  isVisible: boolean
}

export interface Meta {}
