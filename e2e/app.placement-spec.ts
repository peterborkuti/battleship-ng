import { AppPage } from './app.placement.po';

describe('battleship-ng App placement', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage('/placement');
    page.navigateTo();
  });

  it('should contain placement grid', () => {
    const button = page.getAutoPlacementButton();
    button.click();
  });

  it('should display welcome message', () => {

   // expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
