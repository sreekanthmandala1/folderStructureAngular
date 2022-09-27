import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Owlcarousel2Component } from './owlcarousel2.component';

const routes: Routes = [{ path: '', component: Owlcarousel2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Owlcarousel2RoutingModule { }
