import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseService } from './base.service';
const SERVICES = [
  BaseService
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ...SERVICES,
  ],
})
export class ServicesModule { }
