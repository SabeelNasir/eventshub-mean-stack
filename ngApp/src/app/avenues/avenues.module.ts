import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvenuesRoutingModule } from './avenues-routing.module';
import { ListAvenueComponent } from './list-avenue/list-avenue.component';
import { AvenueDetailComponent } from './avenue-detail/avenue-detail.component';
import { AvenueFormComponent } from './avenue-form/avenue-form.component';


@NgModule({
  declarations: [
    ListAvenueComponent,
    AvenueDetailComponent,
    AvenueFormComponent,
  ],
  imports: [
    CommonModule,
    AvenuesRoutingModule
  ]
})
export class AvenuesModule { }
