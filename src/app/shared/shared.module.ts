import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HeaderComponent
  ]
})
export class SharedModule { }
