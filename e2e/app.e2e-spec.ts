import { TreeDomPage } from './app.po';

describe('tree-dom App', () => {
  let page: TreeDomPage;

  beforeEach(() => {
    page = new TreeDomPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
