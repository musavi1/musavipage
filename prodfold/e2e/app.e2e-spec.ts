import { ProdfoldPage } from './app.po';

describe('prodfold App', function() {
  let page: ProdfoldPage;

  beforeEach(() => {
    page = new ProdfoldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
