import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from './pipes/filter/filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FilterPipe
  ],
  exports: [
    CommonModule,
    FormsModule,

    FilterPipe
  ]
})
export class SharedModule { }
