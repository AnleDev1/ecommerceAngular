import { AppMenuItem } from "../models/Menu-item";


export const MENU_ITEMS : AppMenuItem[] = 
[
     {
    label: 'Promociones',
    icon: 'pi pi-money-bill',
    routerLink: ['/productos']
  },
  {
    label: 'Tecnologia',
    icon: 'pi pi-cog'
  },
  {
    label: '  Celulares',
    icon: 'pi pi-mobile',
    routerLink: ['/contacto']
  },
  {
    label: 'Servicio',
    icon: 'pi pi-briefcase',
    items: [
      {
        label: 'Components',
        icon: 'pi pi-bolt'
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server'
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil'
      },
      {
        label: 'Templates',
        icon: 'pi pi-palette',
        items: [
          { label: 'Apollo', icon: 'pi pi-palette' },
          { label: 'Ultima', icon: 'pi pi-palette' }
        ]
      }
    ]
  },
]