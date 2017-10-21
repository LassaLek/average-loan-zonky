import { ZonkyPage } from './app.po';

describe('zonky App', () => {
  let page: ZonkyPage;

  beforeEach(() => {
    page = new ZonkyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
