import { PersonalWebsiteClientPage } from './app.po';

describe('personal-website-client App', () => {
  let page: PersonalWebsiteClientPage;

  beforeEach(() => {
    page = new PersonalWebsiteClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
