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

  it('choose A rating', () => {
    page.navigateTo();
    const ratingA = element(by.id('mat-tab-label-0-4'));
    ratingA.click();

    // mock not static, can test against predownloaded loans
    /*    page.getLoans()
      .then(function(loans){
        expect(loans.length).toEqual(2);
      });*/
  });

  it('choose B rating ', () => {
    page.navigateTo();
    const ratingB = element(by.id('mat-tab-label-0-5'));
    ratingB.click();

    // mock not static, can test against predownloaded loans
    /*    page.getLoans()
      .then(function(loans){
        expect(loans.length).toEqual(0);
      });*/
  });
});
