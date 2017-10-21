import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialDesignModule} from '../material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,

    BrowserAnimationsModule,
    MaterialDesignModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HttpModule,
    MaterialDesignModule,
    HeaderComponent
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
