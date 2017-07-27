import { LearnAngularjsPage } from './app.po';

describe('learn-angularjs App', () => {
  let page: LearnAngularjsPage;

  beforeEach(() => {
    page = new LearnAngularjsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
