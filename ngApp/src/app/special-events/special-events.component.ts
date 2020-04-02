import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Events } from '../models/events';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  constructor(private eventsService: EventsService) { }
  public events: Events;
  ngOnInit(): void {
    this.getEvents();
  }
  public getEvents() {
    this.eventsService.getEvents().subscribe(response => {
      this.events = response as Events;
      console.log(this.events);
    }, error => console.log(error));
  }

}
