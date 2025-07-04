import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiUrl: string = 'http://127.0.0.1:8000/api';

  register(data: FormData) : Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(credentials: any) : Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials); 
  }
  
}
