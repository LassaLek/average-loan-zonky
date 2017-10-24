import {TestBed, inject} from '@angular/core/testing';

import {MarketplaceService} from './marketplace.service';
import {HttpModule} from '@angular/http';

describe('MarketplaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [MarketplaceService]
    });
  });

/*  it('should be created', inject([MarketplaceService], (service: MarketplaceService) => {
    expect(service).toBeTruthy();
  }));*/

  it('sum of empty array is zero', () => {
    expect(MarketplaceService.sumArray([])).toBe(0);
  });

  it('sum of [300, 400, 500] is 1200', () => {
    expect(MarketplaceService.sumArray([300, 400, 500])).toBe(1200);
  });

  it('division by zero returns zero average', () => {
    expect(MarketplaceService.countAverage(0, 0)).toBe(0);
  });

  it('average of negative numbers is zero', () => {
    expect(MarketplaceService.countAverage(-1200, 5)).toBe(0);
  });

  it('average of sum 1000 with count 10 is 100', () => {
    expect(MarketplaceService.countAverage(1000, 10)).toBe(100);
  });

  it('average return max of two decimals 1/3 is rounded to 0.33', () => {
    expect(MarketplaceService.countAverage(1, 3)).toBe(0.33);
  });

  it('projecting empty array returns empty array', () => {
    expect(MarketplaceService.loansToAmounts([])).toEqual([]);
  });

  it('3.987 rounded to two decimal is 3.99', () => {
    expect(MarketplaceService.roundToTwoDecimal(3.987)).toBe(3.99);
  });

  it('33.303 rounded to two decimal is 33.3', () => {
    expect(MarketplaceService.roundToTwoDecimal(33.303)).toBe(33.3);
  });
});
