import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { MarketplaceComponent } from './containers/marketplace.component';
import {MarketplaceRoutingModule} from './marketplace-routing.module';
import {MatCardModule, MatGridListModule, MatTabsModule} from '@angular/material';
import {MarketplaceService} from './providers/marketplace.service';
import {LoanTileComponent} from './components/loan-tile/loan-tile.component';
import {LoanListComponent} from './components/loan-list/loan-list.component';
import {LoanAverageComponent} from './components/loan-average/loan-average.component';

@NgModule({
  imports: [
    SharedModule,
    MarketplaceRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [
    MarketplaceComponent,
    LoanTileComponent,
    LoanListComponent,
    LoanAverageComponent
  ],
  providers: [
    MarketplaceService
  ],
  exports: [
    MarketplaceComponent
  ]
})
export class MarketplaceModule { }
