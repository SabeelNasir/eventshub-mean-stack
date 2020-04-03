import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config/config';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl;
  constructor(private http: HttpClient, private _constants: Constants) {
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
  public logout() {
    localStorage.removeItem(this._constants.tokenKey);
  }

  public isLoggedIn() {
    return localStorage.getItem(this._constants.tokenKey) != null;
  }
  public getToken() {
    return localStorage.getItem(this._constants.tokenKey);
  }

}
