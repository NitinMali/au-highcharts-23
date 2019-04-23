define('components/pie',['components/pie/index'],function(m){return m;});
define('components/trend',['components/trend/index'],function(m){return m;});;
define('app',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.App = void 0;

  class App {
    constructor() {}

    configureRouter(config, router) {
      config.title = 'PFI';
      config.map([{
        route: ['bar'],
        name: 'bar',
        moduleId: 'views/layout',
        title: 'Bar'
      }, {
        route: ['pie'],
        name: 'pie',
        moduleId: 'views/layout',
        title: 'Pie'
      }, {
        route: ['trend'],
        name: 'trend',
        moduleId: 'views/layout',
        title: 'Trend'
      }, {
        route: 'control/:control',
        name: 'control',
        moduleId: 'views/layout',
        title: 'Control'
      }, {
        route: [''],
        redirect: 'control/pie'
      }]);
      this.router = router;
    }

  }

  _exports.App = App;
});;
define('app.html!text',[],function(){return "<template><router-view class=\"col-md-12\"></router-view></template>";});;
define('components/pie/index',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.configure = configure;

  function configure(config) {
    config.globalResources(['./pie', './pie-configurator', './tabs/pie-tab1', './tabs/pie-tab2']);
  }
});;
define('components/pie/pie',["exports", "aurelia-framework", "highcharts"], function (_exports, _aureliaFramework, _highcharts) {
  "use strict";

  _exports.__esModule = true;
  _exports.PieCustomElement = void 0;
  _highcharts = _interopRequireDefault(_highcharts);

  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

  var PieCustomElement = (_class = (_temp =
  /*#__PURE__*/
  function () {
    //chart options
    //bindable properties
    function PieCustomElement() {
      this.options = void 0;

      _initializerDefineProperty(this, "type", _descriptor, this);

      _initializerDefineProperty(this, "title", _descriptor2, this);

      _initializerDefineProperty(this, "titleY", _descriptor3, this);

      _initializerDefineProperty(this, "subtitle", _descriptor4, this);

      _initializerDefineProperty(this, "series", _descriptor5, this);

      _initializerDefineProperty(this, "pointStart", _descriptor6, this);
    }

    var _proto = PieCustomElement.prototype;

    _proto.attached = function attached() {
      this.loadoptions();

      _highcharts.default.chart(this.options);
    };

    _proto.loadoptions = function loadoptions() {
      this.options = {
        chart: {
          type: this.type,
          renderTo: this.container
        },
        title: {
          text: this.title
        },
        subtitle: {
          text: this.subtitle
        },
        yAxis: {
          title: {
            text: this.titleY
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        plotOptions: {
          series: {
            dragDrop: {
              draggableY: true,
              // draggableX: true,
              dragMinY: 0,
              dragPrecisionY: 1 // dragMinX: 0,
              // dragPrecisionX : 60

            },
            label: {
              connectorAllowed: false
            },
            pointStart: this.pointStart
          }
        },
        series: this.series,
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
      };
    };

    return PieCustomElement;
  }(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "type", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return 'pie';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "title", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "titleY", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "subtitle", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "series", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "pointStart", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.PieCustomElement = PieCustomElement;
});;
define('components/pie/pie-configurator',["exports", "aurelia-framework", "../shared-methods"], function (_exports, _aureliaFramework, _sharedMethods) {
  "use strict";

  _exports.__esModule = true;
  _exports.PieConfiguratorCustomElement = void 0;

  var _dec, _class, _class2, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

  var PieConfiguratorCustomElement = (_dec = (0, _aureliaFramework.inject)(_sharedMethods.SharedMethods), _dec(_class = (_class2 = (_temp =
  /*#__PURE__*/
  function () {
    //chart options
    //bindable properties
    function PieConfiguratorCustomElement(sharedMethods) {
      this.options = void 0;

      _initializerDefineProperty(this, "title", _descriptor, this);

      this.sharedMethods = sharedMethods;
    }

    var _proto = PieConfiguratorCustomElement.prototype;

    _proto.attached = function attached() {
      this.loadoptions(); //Default load tab1 content on load

      this.sharedMethods.changeTab('tab1');
    };

    _proto.loadoptions = function loadoptions() {
      this.options = {
        data: 'This is trend configurator'
      };
    };

    return PieConfiguratorCustomElement;
  }(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class2)) || _class);
  _exports.PieConfiguratorCustomElement = PieConfiguratorCustomElement;
});;
define('components/pie/pie-configurator.html!text',[],function(){return "<template><div class=\"sidebar-body mx-4\"><div class=\"pc-tab\"><nav><ul><li><label id=\"tab1Label\" click.delegate=\"sharedMethods.changeTab('tab1')\">Pie First Tab</label></li><li><label id=\"tab2Label\" click.delegate=\"sharedMethods.changeTab('tab2')\">Pie Second Tab</label></li></ul></nav><section><div id=\"tab1\"><tab1></tab1></div><div id=\"tab2\"><tab2></tab2></div></section></div></div></template>";});;
define('components/pie/pie.html!text',[],function(){return "<template><div ref=\"container\"></div></template>";});;
define('components/pie/tabs/pie-tab1',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.PieTab1 = void 0;

  var PieTab1 = function PieTab1() {
    this.title = 'Tab1';
  };

  _exports.PieTab1 = PieTab1;
});;
define('components/pie/tabs/pie-tab1.html!text',[],function(){return "<template><form class=\"pure-form pure-form-stacked\"><fieldset><legend>${title}</legend><label for=\"email\">Email</label> <input id=\"email\" type=\"email\" placeholder=\"Email\"> <span class=\"pure-form-message\">This is a required field.</span> <label for=\"password\">Password</label> <input id=\"password\" type=\"password\" placeholder=\"Password\"> <label for=\"state\">State</label> <select id=\"state\"><option>AL</option><option>CA</option><option>IL</option></select> <label for=\"remember\" class=\"pure-checkbox\"><input id=\"remember\" type=\"checkbox\"> Remember me</label> <button class=\"pure-button pure-button-active\">Save</button></fieldset></form></template>";});;
define('components/pie/tabs/pie-tab2',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.PieTab2 = void 0;

  var PieTab2 = function PieTab2() {
    this.title = 'Tab2';
  };

  _exports.PieTab2 = PieTab2;
});;
define('components/pie/tabs/pie-tab2.html!text',[],function(){return "<template><form class=\"pure-form pure-form-stacked\"><fieldset><legend>${title}</legend><label for=\"email\">Email</label> <input id=\"email\" type=\"email\" placeholder=\"Email\"> <span class=\"pure-form-message\">This is a required field.</span> <label for=\"password\">Password</label> <input id=\"password\" type=\"password\" placeholder=\"Password\"> <label for=\"state\">State</label> <select id=\"state\"><option>AL</option><option>CA</option><option>IL</option></select> <label for=\"remember\" class=\"pure-checkbox\"><input id=\"remember\" type=\"checkbox\"> Remember me</label> <button class=\"pure-button pure-button-active\">Save</button></fieldset></form></template>";});;
define('components/shared-methods',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.SharedMethods = void 0;

  /* eslint-disable padded-blocks */
  class SharedMethods {
    changeTab(tab) {
      //reset all label buttons
      let allLabels = document.querySelectorAll('.pc-tab nav label');

      for (let i = 0; i < allLabels.length; i++) {
        allLabels[i].classList.remove('tab-selected-label');
      } //reset all tab contents


      let allTabContents = document.querySelectorAll('.pc-tab section > div');

      for (let i = 0; i < allTabContents.length; i++) {
        allTabContents[i].style.display = 'none';
      } //only select the label and content which is clicked


      document.querySelector('#' + tab).style.display = 'block';
      document.querySelector('#' + tab + 'Label').classList.add('tab-selected-label');
    }

  }

  _exports.SharedMethods = SharedMethods;
});;
define('components/trend/index',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.configure = configure;

  function configure(config) {
    config.globalResources(['./trend', './trend-configurator', './tabs/tab1', './tabs/tab2']);
  }
});;
define('components/trend/tabs/tab1',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.Tab1 = void 0;

  var Tab1 = function Tab1() {
    this.title = 'Tab1';
  };

  _exports.Tab1 = Tab1;
});;
define('components/trend/tabs/tab1.html!text',[],function(){return "<template><form class=\"pure-form pure-form-stacked\"><fieldset><legend>${title}</legend><label for=\"email\">Email</label> <input id=\"email\" type=\"email\" placeholder=\"Email\"> <span class=\"pure-form-message\">This is a required field.</span> <label for=\"password\">Password</label> <input id=\"password\" type=\"password\" placeholder=\"Password\"> <label for=\"state\">State</label> <select id=\"state\"><option>AL</option><option>CA</option><option>IL</option></select> <label for=\"remember\" class=\"pure-checkbox\"><input id=\"remember\" type=\"checkbox\"> Remember me</label> <button class=\"pure-button pure-button-active\">Save</button></fieldset></form></template>";});;
define('components/trend/tabs/tab2',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.Tab2 = void 0;

  var Tab2 = function Tab2() {
    this.title = 'Tab2';
  };

  _exports.Tab2 = Tab2;
});;
define('components/trend/tabs/tab2.html!text',[],function(){return "<template><form class=\"pure-form pure-form-stacked\"><fieldset><legend>${title}</legend><label for=\"email\">Email</label> <input id=\"email\" type=\"email\" placeholder=\"Email\"> <span class=\"pure-form-message\">This is a required field.</span> <label for=\"password\">Password</label> <input id=\"password\" type=\"password\" placeholder=\"Password\"> <label for=\"state\">State</label> <select id=\"state\"><option>AL</option><option>CA</option><option>IL</option></select> <label for=\"remember\" class=\"pure-checkbox\"><input id=\"remember\" type=\"checkbox\"> Remember me</label> <button class=\"pure-button pure-button-active\">Save</button></fieldset></form></template>";});;
define('components/trend/trend',["exports", "aurelia-framework", "highcharts"], function (_exports, _aureliaFramework, _highcharts) {
  "use strict";

  _exports.__esModule = true;
  _exports.TrendCustomElement = void 0;
  _highcharts = _interopRequireDefault(_highcharts);

  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

  var TrendCustomElement = (_class = (_temp =
  /*#__PURE__*/
  function () {
    //chart options
    //bindable properties
    function TrendCustomElement() {
      this.options = void 0;

      _initializerDefineProperty(this, "type", _descriptor, this);

      _initializerDefineProperty(this, "title", _descriptor2, this);

      _initializerDefineProperty(this, "titleY", _descriptor3, this);

      _initializerDefineProperty(this, "subtitle", _descriptor4, this);

      _initializerDefineProperty(this, "series", _descriptor5, this);

      _initializerDefineProperty(this, "pointStart", _descriptor6, this);
    }

    var _proto = TrendCustomElement.prototype;

    _proto.attached = function attached() {
      this.loadoptions();

      _highcharts.default.chart(this.options);
    };

    _proto.loadoptions = function loadoptions() {
      this.options = {
        chart: {
          type: this.type,
          renderTo: this.container
        },
        title: {
          text: this.title
        },
        subtitle: {
          text: this.subtitle
        },
        yAxis: {
          title: {
            text: this.titleY
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        plotOptions: {
          series: {
            dragDrop: {
              draggableY: true,
              // draggableX: true,
              dragMinY: 0,
              dragPrecisionY: 1 // dragMinX: 0,
              // dragPrecisionX : 60

            },
            label: {
              connectorAllowed: false
            },
            pointStart: this.pointStart
          }
        },
        series: this.series,
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
      };
    };

    return TrendCustomElement;
  }(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "type", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return 'line';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "title", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "titleY", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "subtitle", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "series", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "pointStart", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.TrendCustomElement = TrendCustomElement;
});;
define('components/trend/trend-configurator',["exports", "aurelia-framework", "../shared-methods"], function (_exports, _aureliaFramework, _sharedMethods) {
  "use strict";

  _exports.__esModule = true;
  _exports.TrendConfiguratorCustomElement = void 0;

  var _dec, _class, _class2, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

  var TrendConfiguratorCustomElement = (_dec = (0, _aureliaFramework.inject)(_sharedMethods.SharedMethods), _dec(_class = (_class2 = (_temp =
  /*#__PURE__*/
  function () {
    //chart options
    //bindable properties
    function TrendConfiguratorCustomElement(sharedMethods) {
      this.options = void 0;

      _initializerDefineProperty(this, "title", _descriptor, this);

      this.sharedMethods = sharedMethods;
    }

    var _proto = TrendConfiguratorCustomElement.prototype;

    _proto.attached = function attached() {
      this.loadoptions(); //Default load tab1 content on load

      this.sharedMethods.changeTab('tab1');
    };

    _proto.loadoptions = function loadoptions() {
      this.options = {
        data: 'This is trend configurator'
      };
    };

    return TrendConfiguratorCustomElement;
  }(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [_aureliaFramework.bindable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class2)) || _class);
  _exports.TrendConfiguratorCustomElement = TrendConfiguratorCustomElement;
});;
define('components/trend/trend-configurator.html!text',[],function(){return "<template><div class=\"sidebar-body mx-4\"><div class=\"pc-tab\"><nav><ul><li><label id=\"tab1Label\" click.delegate=\"sharedMethods.changeTab('tab1')\">First Tab</label></li><li><label id=\"tab2Label\" click.delegate=\"sharedMethods.changeTab('tab2')\">Second Tab</label></li></ul></nav><section><div id=\"tab1\"><tab1></tab1></div><div id=\"tab2\"><tab2></tab2></div></section></div></div></template>";});;
define('components/trend/trend.html!text',[],function(){return "<template><div ref=\"container\"></div></template>";});;
define('environment',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  var _default = {
    debug: true,
    testing: true
  };
  _exports.default = _default;
});;
define('main',["exports", "./environment"], function (_exports, _environment) {
  "use strict";

  _exports.__esModule = true;
  _exports.configure = configure;
  _environment = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('components/trend').feature('components/pie');

    if (_environment.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(() => aurelia.setRoot());
  }
});;
define('views/layout',["exports", "aurelia-framework", "aurelia-router"], function (_exports, _aureliaFramework, _aureliaRouter) {
  "use strict";

  _exports.__esModule = true;
  _exports.Layout = void 0;

  var _dec, _class, _temp;

  var Layout = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = (_temp =
  /*#__PURE__*/
  function () {
    //default on load its false
    function Layout(router) {
      this.configMenuVisible = false;
      this.router = void 0;
      this.navigationInstruction = void 0;
      this.param = void 0;
      this.seriesPopulation = [{
        name: 'KPI 1',
        data: [194890682, 196603732, 198314934, 200004188, 201717541, 203475683, 205156587, 206804741, 208494900]
      }, {
        name: 'KPI 2',
        data: [99377384, 100281097, 101182880, 102072857, 102973443, 103894681, 104776947, 105641142, 106523727]
      }, {
        name: 'KPI 3',
        data: [95513298, 96322635, 97132054, 97931331, 98744098, 99581002, 100379640, 101163599, 101971173]
      }];
      this.router = router;
    }

    var _proto = Layout.prototype;

    _proto.activate = function activate(params, navigationInstruction) {
      this.param = params;
      this.navigationInstruction = navigationInstruction;
      console.log(navigationInstruction);
    };

    _proto.toggleNav = function toggleNav() {
      if (this.configMenuVisible) {
        this.mySidenav.style.width = '0';
        this.main.style.marginLeft = '0';
      } else {
        this.mySidenav.style.width = '50%';
        this.main.style.marginLeft = '50%';
      }

      this.configMenuVisible = !this.configMenuVisible;
    };

    return Layout;
  }(), _temp)) || _class);
  _exports.Layout = Layout;
});;
define('views/layout.html!text',[],function(){return "<template><div class=\"container\"><div class=\"row\"><div class=\"pure-g control-header\"><div class=\"pure-u-sm-1-3\"><img src=\"/img/menu-icon.png\" class=\"font-white px-2 clickable\" click.delegate=\"toggleNav()\"> <span class=\"navbar-brand pure-u-sm-1-2\"></span><p>All-in-one control</p></div><div class=\"pure-u-sm-1-2\"><div class=\"float-right\"><a class=\"pure-button pure-button-active\" route-href=\"route.bind: 'control'; params.bind: { control: 'bar' }\">Bar</a> <a class=\"pure-button pure-button-active\" route-href=\"route.bind: 'control'; params.bind: { control: 'pie' }\">Pie</a> <a class=\"pure-button pure-button-active\" route-href=\"route.bind: 'control'; params.bind: { control: 'trend' }\">Trend</a></div></div></div><template if.bind=\"param.control === 'trend'\"><div class=\"sidenav bg-light\" ref=\"mySidenav\"><trend-configurator title=\"Trend configurator\"></trend-configurator></div><div class=\"col-12\" ref=\"main\"><trend type=\"line\" title=\"Trend Control\" subtitle=\"Trend control for operand value\" title-y=\"Value\" series.bind=\"seriesPopulation\" point-start.bind=\"2010\"></trend></div></template><template if.bind=\"param.control === 'pie'\"><div class=\"sidenav bg-light\" ref=\"mySidenav\"><pie-configurator title=\"Pie configurator\"></pie-configurator></div><div class=\"col-12\" ref=\"main\"><pie type=\"pie\" title=\"Trend Control\" subtitle=\"Trend control for operand value\" title-y=\"Value\" series.bind=\"seriesPopulation\" point-start.bind=\"2010\"></pie></div></template></div></div></template>";});
//# sourceMappingURL=app-bundle.js.map