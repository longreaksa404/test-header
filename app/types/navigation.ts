export interface SubMenuItem {
  name: string;
  icon: string;
}

export interface NavLink {
  label: string;
  path: string;
  icon?: string;
  hasDropdown?: boolean;
  children?: SubMenuItem[];
}

export interface HeaderData {
  mainNav: NavLink[];
  subNav: NavLink[];
}