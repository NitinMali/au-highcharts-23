import {
  inject
} from 'aurelia-framework';
import {
  Router
} from 'aurelia-router';

@inject(Router)
export class Layout {
  //default on load its false
  configMenuVisible = false;
  router;
  navigationInstruction;
  param;

  seriesPopulation = [{
    name: 'KPI 1',
    data: [194890682, 196603732, 198314934, 200004188, 201717541, 203475683, 205156587, 206804741, 208494900]
  }, {
    name: 'KPI 2',
    data: [99377384, 100281097, 101182880, 102072857, 102973443, 103894681, 104776947, 105641142, 106523727]
  }, {
    name: 'KPI 3',
    data: [95513298, 96322635, 97132054, 97931331, 98744098, 99581002, 100379640, 101163599, 101971173]
  }];

  constructor(router) {
    this.router = router;
  }

  activate(params, navigationInstruction) {

    this.param = params;

    this.navigationInstruction = navigationInstruction;
    console.log(navigationInstruction);
  }

  toggleNav() {
    if (this.configMenuVisible) {
      this.mySidenav.style.width = '0';
      this.main.style.marginLeft = '0';
    } else {
      this.mySidenav.style.width = '50%';
      this.main.style.marginLeft = '50%';
    }

    this.configMenuVisible = !this.configMenuVisible;
  }
}
