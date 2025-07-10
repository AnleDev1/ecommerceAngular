import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { FileUploadModule, FileUploadEvent } from 'primeng/fileupload'
import { ButtonModule } from 'primeng/button';

import { User } from '../models/User';
import { AuthService } from '../services/auth-service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ FormsModule, PasswordModule, CommonModule, FileUploadModule, ButtonModule
   ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent{

  user: User = new User();
  showDialogRegister: boolean = false;

  @Output() onUserCreated  = new EventEmitter<{ success: boolean; message: string }>();

  constructor(private authService: AuthService,) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.user.image = file; 
    } 
  }
  
  saveUser(){
    const formData = new FormData();
    formData.append("image", this.user.image);
    formData.append("name", this.user.name);
    formData.append("email", this.user.email);
    formData.append("password", this.user.password);
    formData.append("password_confirmation", this.user.password_confirmation);

    //LLAMADA AL AUTH SERVICE PARA CONSUMO DE API REVISAR AUTHSERVICE.TS
    this.authService.register(formData).subscribe({
      next: (data) =>{
        const token = data.access_token;
        if(token){
          localStorage.setItem('auth_token', token);
        }
        this.onUserCreated.emit({ success: true, message: data.message });
      },
      error: (err) => {
        const msg = err?.error?.message || 'Error al registrar';
        this.onUserCreated.emit({ success: false, message: msg });
      }
    })
  }

}
