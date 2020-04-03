import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvenueDetailComponent } from './avenue-detail.component';


const routes: Routes = [
  {
    path: '', component: AvenueDetailComponent,
    children: [
      { path: 'locations', loadChildren: () => import('./locations/locations.module').then(m => m.LocationsModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvenueDetailRoutingModule { }
