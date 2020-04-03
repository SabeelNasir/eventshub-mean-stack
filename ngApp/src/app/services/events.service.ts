import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../config/config';
import { Events } from '../models/events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient, private config: Config) { }
  public getEvents(): Observable<Events> {
    return this.http.get<Events>(this.config.apiUrl + '/events')
  }
  public getUserEvents(): Observable<Events> {
    return this.http.get<Events>(this.config.apiUrl + '/user-events')
  }
  public getSpecialEvents(): Observable<Events> {
    return this.http.get<Events>(this.config.apiUrl + '/special-events');
  }
}
