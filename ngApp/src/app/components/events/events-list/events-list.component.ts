import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Events } from 'src/app/models/events';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

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
