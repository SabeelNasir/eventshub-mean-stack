import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsComponent } from './locations.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {
    path: '',
    component: LocationsComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'create', component: CreateComponent },
      { path: 'update', component: UpdateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
