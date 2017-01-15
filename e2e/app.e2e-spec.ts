import { AngularSimpleTranslatePage } from './app.po';

describe('angular-simple-translate App', function() {
  let page: AngularSimpleTranslatePage;

  beforeEach(() => {
    page = new AngularSimpleTranslatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
