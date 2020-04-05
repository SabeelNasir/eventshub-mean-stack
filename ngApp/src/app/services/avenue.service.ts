import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Config } from '../config/config';
import { Avenues } from '../models/avenues';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvenueService {

  constructor(
    private _authService: AuthService,
    private _config: Config,
    private _http: HttpClient) { }
  public saveAvenue(formData: Avenues) {
    return this._http.post(this._config.apiUrl + '/save-avenue', formData, this._config.httpOptions)
  }
  public updateAvenue(formData: Avenues) {
    return this._http.post(this._config.apiUrl + '/update-avenue', formData, this._config.httpOptions)
  }
  public getAvenue(id: string) {
    return this._http.get(this._config.apiUrl + '/avenues/' + id, this._config.httpOptions)
  }
}
