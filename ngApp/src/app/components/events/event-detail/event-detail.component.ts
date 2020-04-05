import { Component, OnInit, Input } from '@angular/core';
import { Events } from 'src/app/models/events';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  @Input() event: Events

  constructor() { }

  ngOnInit(): void {
  }

}
