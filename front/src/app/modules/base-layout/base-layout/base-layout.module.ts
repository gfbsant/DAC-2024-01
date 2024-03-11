import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    BaseLayoutComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ],
  exports: [
    BaseLayoutComponent
  ]
})
export class BaseLayoutModule { }
