import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JonatanBarcenasRoutingModule } from './jonatan-barcenas-routing.module';
import { JonatanBarcenasComponent } from './jonatan-barcenas.component';


@NgModule({
  declarations: [
    JonatanBarcenasComponent
  ],
  imports: [
    CommonModule,
    JonatanBarcenasRoutingModule
  ]
})
export class JonatanBarcenasModule { }
