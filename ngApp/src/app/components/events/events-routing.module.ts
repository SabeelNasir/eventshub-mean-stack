import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventsListComponent } from './events-list/events-list.component';
import { SpecialEventsComponent } from '../special-events/special-events.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { UserEventsComponent } from './user-events/user-events.component';


const routes: Routes = [
  {
    path: '', component: EventsComponent, children: [
      { path: '', component: EventsListComponent },
      { path: 'user-events', component: UserEventsComponent, canActivate: [AuthGuard] },
      { path: 'special', component: SpecialEventsComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
