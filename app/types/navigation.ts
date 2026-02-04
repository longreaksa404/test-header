/**
 * Interface representing a single item within a dropdown menu.
 * Defined first to ensure NavLink can reference it without errors.
 */
export interface SubMenuItem {
  name: string;
  icon: string;
}

/**
 * Interface for primary navigation links.
 * Includes optional dropdown properties to match Figma designs.
 */
export interface NavLink {
  label: string;
  path: string;
  icon?: string;
  hasDropdown?: boolean;
  children?: SubMenuItem[];
}

/**
 * Root interface for the header data structure.
 * Used by useFetch in the AppHeader component.
 */
export interface HeaderData {
  mainNav: NavLink[];
  subNav: NavLink[];
}