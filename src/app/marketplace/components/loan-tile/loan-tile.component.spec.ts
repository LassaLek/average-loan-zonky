import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTileComponent } from './loan-tile.component';
import {MatGridListModule} from '@angular/material';

describe('LoanTileComponent', () => {
  let component: LoanTileComponent;
  let fixture: ComponentFixture<LoanTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatGridListModule
      ],
      declarations: [ LoanTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
