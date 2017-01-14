import { HnNewsClonePage } from './app.po';

describe('hn-news-clone App', function() {
  let page: HnNewsClonePage;

  beforeEach(() => {
    page = new HnNewsClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
