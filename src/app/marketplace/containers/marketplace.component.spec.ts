import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MarketplaceComponent} from './marketplace.component';
import {MarketplaceModule} from '../marketplace.module';
import {SharedModule} from '../../shared/shared.module';
import {MarketplaceRoutingModule} from '../marketplace-routing.module';
import {MatTabsModule} from '@angular/material';
import {MarketplaceService} from '../providers/marketplace.service';

describe('MarketplaceComponent', () => {
  let component: MarketplaceComponent;
  let fixture: ComponentFixture<MarketplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

/*  it('should be created', () => {
    expect(component).toBeTruthy();
  });*/

});
