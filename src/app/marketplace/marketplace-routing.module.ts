import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import {MarketplaceComponent} from './containers/marketplace.component';


@NgModule({
  imports: [RouterModule.forChild([
    { path: 'marketplace', component: MarketplaceComponent }
  ])],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule {}
