import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config/config';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl;
  constructor(private http: HttpClient) {
    this.apiUrl = (new Config()).apiUrl;
  }

  public register(formData): Observable<User> {
    if (formData) {
      console.log(formData);
      return this.http.post<User>(this.apiUrl + '/register', formData);
    }
  }

  public login(formData) {
    return this.http.post<any>(this.apiUrl + '/login', formData);
  }

}
