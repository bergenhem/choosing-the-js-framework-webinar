import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'items'], name: 'items', moduleId: PLATFORM.moduleName('./items'), nav: true, title: 'List Items' }
    ]);

    this.router = router;
  }
}
