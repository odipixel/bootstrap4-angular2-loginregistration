import { Angular2Bootstrap4Page } from './app.po';

describe('angular2-bootstrap4 App', () => {
  let page: Angular2Bootstrap4Page;

  beforeEach(() => {
    page = new Angular2Bootstrap4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
