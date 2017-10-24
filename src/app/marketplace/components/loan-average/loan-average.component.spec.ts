import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAverageComponent } from './loan-average.component';

describe('LoanAverageComponent', () => {
  let component: LoanAverageComponent;
  let fixture: ComponentFixture<LoanAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
