import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Owlcarousel2RoutingModule } from './owlcarousel2-routing.module';
import { Owlcarousel2Component } from './owlcarousel2.component';


@NgModule({
  declarations: [
    Owlcarousel2Component
  ],
  imports: [
    CommonModule,
    Owlcarousel2RoutingModule
  ]
})
export class Owlcarousel2Module { }
