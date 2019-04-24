export class App {
  constructor() {
  }

  configureRouter(config, router) {
    config.title = 'PFI';
    config.map([
      { route: 'control/:control', name: 'control', moduleId: 'views/layout', title: 'Control' },
      { route: [''], redirect: 'control/pie'  }
    ]);

    this.router = router;
  }
}
