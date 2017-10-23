import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {MarketplaceModule} from './marketplace/marketplace.module';
import {AppRoutingModule} from './app-routing.module';
import { FilterPipe } from './shared/pipes/filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MarketplaceModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
