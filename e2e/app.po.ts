import { browser, by, element } from 'protractor';

export class AppPage {
  constructor (public readonly route: string = '/') {}
  navigateTo() {
    return browser.get(this.route);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
