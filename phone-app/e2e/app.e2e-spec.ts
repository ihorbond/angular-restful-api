import { PhoneAppPage } from './app.po';

describe('phone-app App', () => {
  let page: PhoneAppPage;

  beforeEach(() => {
    page = new PhoneAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
