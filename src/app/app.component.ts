import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar'
import {AvatarModule} from 'primeng/avatar'
import { Menu } from 'primeng/menu';

import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Menubar, AvatarModule, Menu, Dialog, ButtonModule, InputTextModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'ecommerceAngular';

   items: MenuItem[] | undefined;
   menun: MenuItem[] | undefined;
   showDialogRegister: any;
   showDialoglogin: any;

      ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Features',
                icon: 'pi pi-star'
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
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
                            {
                                label: 'Apollo',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Ultima',
                                icon: 'pi pi-palette'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope'
            }
        ],
        this.menun = [
          {
                label: 'Login',
                icon: 'pi pi-user',
                command: () =>{
                  this.showDialoglogin = true;
                }
          },
          {
                label: 'Register',
                icon: 'pi pi-sign-in',
                command: () =>{
                  this.showDialogRegister = true;
                }
          }
        ]
    }

    closeDialog() {
        this.showDialoglogin = false;
    }

    visible: boolean = false;
}
