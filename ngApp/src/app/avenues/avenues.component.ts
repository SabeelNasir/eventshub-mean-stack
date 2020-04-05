import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Avenues } from '../models/avenues';
import { Config } from '../config/config';

@Component({
  selector: 'app-avenues',
  templateUrl: './avenues.component.html',
  styleUrls: ['./avenues.component.css']
})
export class AvenuesComponent implements OnInit {

  constructor(private _http: HttpClient, private _config: Config) { }

  ngOnInit(): void {
    this.getAvenues()
  }
  public data: Avenues
  public getAvenues() {
    this._http.get(this._config.apiUrl + '/avenues', this._config.httpOptions)
      .subscribe(res => {
        this.data = res as Avenues
      })
  }
}
