import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'avenues', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'events', loadChildren: () => import('./components/events/events.module').then(m => m.EventsModule) },
  { path: 'avenues', loadChildren: () => import('./avenues/avenues.module').then(m => m.AvenuesModule) },
  { path: '**', component: NotFoundComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
