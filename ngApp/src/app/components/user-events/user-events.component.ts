import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Events } from '../../models/events';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit {

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.getUserEvents()
  }
  events: Events

  public getUserEvents() {
    this.eventsService.getUserEvents().subscribe(response => {
      this.events = response as Events;
      console.log(this.events);
    });
  }

}
