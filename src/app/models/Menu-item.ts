export interface AppMenuItem {
  label: string;
  icon?: string;
  command?: () => void;
  routerLink?: string | any[];
  visible?: boolean;
  disabled?: boolean;
  items?: AppMenuItem[]; // para submenús anidados
}

