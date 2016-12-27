import { AngularCrmPage } from './app.po';

describe('angular-crm App', function() {
  let page: AngularCrmPage;

  beforeEach(() => {
    page = new AngularCrmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
