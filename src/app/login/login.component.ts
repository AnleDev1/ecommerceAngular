import { Component } from '@angular/core';
import { Login } from '../models/Login';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  login: Login = new Login();

  constructor(private authService: AuthService) {}

  singIn() {
    const credentials = {
      email: this.login.email.trim(),
      password: this.login.password,
    };

    this.authService.login(credentials).subscribe({
      next: (data) => {
        const token = data.access_token;
        if (token) {
          localStorage.setItem('auth_token', token);
        }
        console.log('✅ Registro exitoso:', data.message || 'Usuario creado');
      },
      error: (err) => {
        const msg = err?.error?.message || 'Erro al registrar';
        console.error('Error', msg);
      },
    });
  }
}
