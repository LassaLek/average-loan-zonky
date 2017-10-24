import { browser, by, element } from 'protractor';

export class ZonkyPage {
  navigateTo() {
    return browser.get('/');
  }

  getTabs() {
    return element
      .all(by.className('mat-tab-label'))
      .map(function(element) {
        return element.getText();
      });
  }

  getLoans() {
    return element
      .all(by.className('mat-grid-tile'))
      .map(function(element) {
        return element.getText();
      });
  }
}
