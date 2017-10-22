import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { MarketplaceComponent } from './containers/marketplace.component';
import {MarketplaceRoutingModule} from './marketplace-routing.module';
import {MatTabsModule} from '@angular/material';
import {MarketplaceService} from './providers/marketplace.service';

@NgModule({
  imports: [
    SharedModule,
    MarketplaceRoutingModule,
    MatTabsModule,
  ],
  declarations: [
    MarketplaceComponent
  ],
  providers: [
    MarketplaceService
  ],
  exports: [
    MarketplaceComponent
  ]
})
export class MarketplaceModule { }
