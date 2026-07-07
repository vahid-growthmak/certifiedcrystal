export interface NavLink {
  label: string;
  href: string;
}

export interface MegaColumn {
  title: string;
  href: string;
  links: NavLink[];
}

export interface TopNavItem {
  label: string;
  href: string;
  columns?: MegaColumn[]; // present when it's a mega-menu dropdown
  simple?: NavLink[]; // present for a single flat dropdown list
}

export interface CategoryTile {
  label: string;
  href: string;
  img: string; // absolute path under /img/...
}

export interface ProductCard {
  title: string;
  href: string;
  img: string;
  price?: string;
  compareAt?: string;
  badge?: string;
}

export interface Testimonial {
  name?: string;
  product: string;
  img: string;
  quote?: string;
  rating?: number;
}

export interface BlogPost {
  title: string;
  href: string;
  img: string;
  excerpt?: string;
}
