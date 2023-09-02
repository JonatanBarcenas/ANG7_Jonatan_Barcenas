import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JonatanBarcenasComponent } from './jonatan-barcenas.component';

const routes: Routes = [{ path: '', component: JonatanBarcenasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JonatanBarcenasRoutingModule { }
