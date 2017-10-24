import {ZonkyPage} from './app.po';
import {by, element} from 'protractor';

describe('zonky App', () => {
  let page: ZonkyPage;

  beforeEach(() => {
    page = new ZonkyPage();
  });

  it('should display page with 8 rating selectors', () => {
    page.navigateTo();
    page.getTabs()
      .then(function(tabs){
        expect(tabs.length).toEqual(8);
    });

  });

  it('choose A rating, should be 2 loans', () => {
    page.navigateTo();
    let ratingAA = element(by.id('mat-tab-label-0-4'));
    ratingAA.click();
    page.getLoans()
      .then(function(loans){
        expect(loans.length).toEqual(2);
      });
  });

  it('choose B rating, should be 0 loans ', () => {
    page.navigateTo();
    let ratingAA = element(by.id('mat-tab-label-0-5'));
    ratingAA.click();
    page.getLoans()
      .then(function(loans){
        expect(loans.length).toEqual(0);
      });
  });
});
