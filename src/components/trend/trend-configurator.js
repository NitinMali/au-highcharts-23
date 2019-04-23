/* eslint-disable no-trailing-spaces */
import { bindable, inject } from 'aurelia-framework';
import { SharedMethods } from '../shared-methods';

@inject(SharedMethods)
export class TrendConfiguratorCustomElement {
  //chart options
  options;

  //bindable properties
  @bindable title;

  constructor(sharedMethods) {
    this.sharedMethods = sharedMethods;
  }

  attached() {
    this.loadoptions();
    //Default load tab1 content on load
    this.sharedMethods.changeTab('tab1');
  }

  loadoptions() {
    this.options = {
      data: 'This is trend configurator'
    };
  }
}
