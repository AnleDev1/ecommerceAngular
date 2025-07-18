import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar'
import {AvatarModule} from 'primeng/avatar'
import { Menu } from 'primeng/menu';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';


import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { MENU_ITEMS } from './data/Menu-Items';
import { AppMenuItem } from './models/Menu-item';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Menubar, AvatarModule, Menu, Dialog, RegisterComponent, ButtonModule, ToastModule,
 LoginComponent,ToolbarModule,IconFieldModule,InputIconModule],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  styles: []
})
export class AppComponent {


  title = 'ecommerceAngular';

   items: MenuItem[] | undefined;
   menun: MenuItem[] | undefined;
   showDialogRegister: boolean = false;
   showDialoglogin: any;

    constructor(private messageService: MessageService){}


    AppMenuItems : MenuItem[] = [];

      ngOnInit() {

        this.AppMenuItems = MENU_ITEMS;



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

   handleRegisterResult(result: { success: boolean; message: string }) {
    this.showDialogRegister = false;

    this.messageService.add({
      severity: result.success ? 'success' : 'error',
      summary: result.success ? '¡Registro exitoso!' : 'Error',
      detail: result.message,
      life: 3000
    });
  }

}
