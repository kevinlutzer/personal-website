 import { Component, OnChanges, Input } from '@angular/core';
import { Visitor, VisitorOptions } from './visitor.interface';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'visitor-chart',
  templateUrl: './visitor-chart.component.html',
})
export class VisitorChartComponent {
  @Input() visitors: Visitor[] = [];

  public doughnutChartLabels = VisitorOptions;

  public doughnutChartDatasets: ChartConfiguration['data']['datasets'] = [
      { data: [ 350, 450, 100 ], label: 'Series A' },
      { data: [ 50, 150, 120 ], label: 'Series B' },
      { data: [ 250, 130, 70 ], label: 'Series C' }
    ];

  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: false
  };

  getDoughnutChartData(): number[][] {
    const data = this.doughnutChartLabels
      .map( visitorType => {
        return this.visitors ? this.visitors
          .filter(visitor => visitor.visitorType === visitorType).length : 0;
      });

    return [data];
  }
}

