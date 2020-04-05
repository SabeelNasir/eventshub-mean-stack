import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvenuesComponent } from './avenues.component';
import { ListAvenueComponent } from './list-avenue/list-avenue.component';
import { AvenueFormComponent } from './avenue-form/avenue-form.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AvenuesComponent,
  },
  { path: 'list', component: ListAvenueComponent },
  { path: 'create', component: AvenueFormComponent },
  { path: 'create/:id', component: AvenueFormComponent },
  { path: 'detail', loadChildren: () => import('./avenue-detail/avenue-detail.module').then(m => m.AvenueDetailModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvenuesRoutingModule { }
