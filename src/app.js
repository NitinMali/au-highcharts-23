export class App {
  constructor() {
  }

  configureRouter(config, router) {
    config.title = 'PFI';
    config.map([
      { route: ['bar'], name: 'bar', moduleId: 'views/layout', title: 'Bar' },
      { route: ['pie'], name: 'pie', moduleId: 'views/layout', title: 'Pie' },
      { route: ['trend'], name: 'trend', moduleId: 'views/layout', title: 'Trend' },
      { route: 'control/:control', name: 'control', moduleId: 'views/layout', title: 'Control' },
      { route: [''], redirect: 'control/pie'  }
    ]);

    this.router = router;
  }
}
