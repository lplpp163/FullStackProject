import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  me() {
    // return this.httpClient.post(`${environment.api}/me`, 'hello', {
    return this.httpClient.get(`${environment.api}/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  logout() {

    return this.httpClient.post(`${environment.api}/logout`, 'hello', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    localStorage.removeItem('token');

  }

  isLogin() {
    return localStorage.getItem('token');
  }

}
