import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config/config';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Constants } from '../constants/constants';
import { FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string;
  constructor(private http: HttpClient,
    private _constants: Constants,
    private cookieService: CookieService,
    private _router: Router) {
    this.apiUrl = (new Config()).apiUrl;
  }
  public register(formData: FormGroup): Observable<User> {
    if (formData) {
      console.log(formData);
      return this.http.post<User>(this.apiUrl + '/register', formData);
    }
  }
  public login(formData: FormGroup) {
    return this.http.post<any>(this.apiUrl + '/login', formData);
  }
  public logout() {
    localStorage.removeItem(this._constants.tokenKey);
    this._router.navigate(['/login'])
  }
  public isLoggedIn() {
    return localStorage.getItem(this._constants.tokenKey) != null;
  }
  public getToken() {
    return localStorage.getItem(this._constants.tokenKey);
  }
  public isAdmin() {
    const user: User = JSON.parse(this.cookieService.get('userCookie'));
    if (user) {
      if (user.role == 'Admin')
        return true
      else return false
    }
    return false
  }
  public setUserInCookie(user: User) {
    this.cookieService.set('userCookie', JSON.stringify(user));
  }

}
