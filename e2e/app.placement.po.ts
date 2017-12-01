import { browser, by, element } from 'protractor';

export class AppPage {
  constructor (public readonly route: string = '/') {}
  navigateTo() {
    return browser.get(this.route);
  }

  getPlacementGrid() {
    return element(by.tagName('app-map'));
  }

  getAutoPlacementButton() {
    return element(by.tagName('app-map')).$('button');
  }
}
