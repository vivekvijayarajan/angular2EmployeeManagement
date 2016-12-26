import { AngularPluralSightPOCPage } from './app.po';

describe('angular-plural-sight-poc App', function() {
  let page: AngularPluralSightPOCPage;

  beforeEach(() => {
    page = new AngularPluralSightPOCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
