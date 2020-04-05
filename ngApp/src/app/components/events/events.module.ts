import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsListComponent } from './events-list/events-list.component';
import { SpecialEventsComponent } from '../special-events/special-events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { UserEventsComponent } from './user-events/user-events.component';
import { EventsComponent } from './events.component';


@NgModule({
  declarations: [
    EventsComponent,
    EventsListComponent,
    SpecialEventsComponent,
    EventDetailComponent,
    UserEventsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
