import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvenueDetailRoutingModule } from './avenue-detail-routing.module';
import { LocationsComponent } from './locations/locations.component';


@NgModule({
  declarations: [
    LocationsComponent
  ],
  imports: [
    CommonModule,
    AvenueDetailRoutingModule
  ]
})
export class AvenueDetailModule { }
