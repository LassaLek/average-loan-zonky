import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoanListComponent} from './loan-list.component';
import {MatGridListModule} from '@angular/material';
import {LoanTileComponent} from '../loan-tile/loan-tile.component';

describe('LoanListComponent', () => {
  let component: LoanListComponent;
  let fixture: ComponentFixture<LoanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatGridListModule
      ],
      declarations: [
        LoanListComponent,
        LoanTileComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
