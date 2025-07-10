import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
      //Obtenemos el token del local storage para cargarlo en las peticiones que lo requieran
      const token = localStorage.getItem('auth_token');

      if (token) {
        const cloned = req.clone({ 
        setHeaders :{
          Authorization: `Bearer ${token}`
        }
        });
        return next.handle(cloned)
      }

      return next.handle(req)
  }
}