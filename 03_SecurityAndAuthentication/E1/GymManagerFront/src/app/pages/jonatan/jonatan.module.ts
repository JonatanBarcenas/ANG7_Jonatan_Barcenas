import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JonatanRoutingModule } from './jonatan-routing.module';
import { JonatanComponent } from './jonatan.component';


@NgModule({
  declarations: [
    JonatanComponent
  ],
  imports: [
    CommonModule,
    JonatanRoutingModule
  ]
})
export class JonatanModule { }
