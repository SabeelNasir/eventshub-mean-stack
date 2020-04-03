import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './components/events/events.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { AuthGuard } from './guards/auth.guard';
import { UserEventsComponent } from './components/user-events/user-events.component';
import { AvenuesComponent } from './avenues/avenues.component';


const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'events', component: EventsComponent },
  { path: 'user-events', component: UserEventsComponent, canActivate: [AuthGuard] },
  { path: 'special', component: SpecialEventsComponent, canActivate: [AuthGuard] },
  { path: 'avenues', loadChildren: () => import('./avenues/avenues.module').then(m => m.AvenuesModule) },
  // { path: 'avenues', component: AvenuesComponent },
  { path: '**', component: EventsComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
