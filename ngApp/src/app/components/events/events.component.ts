import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Events } from '../../models/events';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

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
