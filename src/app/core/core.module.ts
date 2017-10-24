import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabBody, MatTabHeader, MatToolbarModule} from '@angular/material';
import {ErrorService} from './services/error.service';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,

    BrowserAnimationsModule,
    MatToolbarModule,

  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    ErrorService
  ],
  exports: [
    HttpModule,
    HeaderComponent,
    FooterComponent
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
