import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  register(user) {
    return this.httpClient.post(`${environment.api}/register`, user);
  }

  login(user) {
    return this.httpClient.post(`${environment.api}/login`, user);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLogin() {
    return localStorage.getItem('token');
  }

}
