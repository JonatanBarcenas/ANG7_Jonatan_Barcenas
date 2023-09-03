import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JonatanComponent } from './jonatan.component';

const routes: Routes = [{ path: '', component: JonatanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JonatanRoutingModule { }
