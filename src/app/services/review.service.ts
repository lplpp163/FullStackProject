import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  _headers = { headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`) };

  constructor(private httpClient: HttpClient) { }

  create(data) {
    return this.httpClient.post(`${environment.api}/review/add`, data, this._headers);
  }

  getReviewsById(id) {
    return this.httpClient.get(`${environment.api}/review/${id}`);
  }

}
