import { bindable } from 'aurelia-framework';
import highcharts from 'highcharts';

export class TrendCustomElement {
    //chart options
    options;

    //bindable properties
    @bindable type = 'line';
    @bindable title;
    @bindable titleY;
    @bindable subtitle;
    @bindable series;
    @bindable pointStart;

    constructor() { }

    attached() {
      this.loadoptions();
      highcharts.chart(this.options);
    }

    loadoptions() {
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
              dragPrecisionY: 1
              // dragMinX: 0,
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
    }
}
