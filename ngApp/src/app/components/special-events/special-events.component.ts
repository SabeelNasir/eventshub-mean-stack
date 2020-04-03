import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Events } from '../../models/events';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  constructor(private eventsService: EventsService, private _router: Router) { }
  public events: Events;
  ngOnInit(): void {
    this.getEvents();
  }
  public getEvents() {
    this.eventsService.getSpecialEvents().subscribe(response => {
      this.events = response as Events;
      console.log(this.events);
    });
  }

}
