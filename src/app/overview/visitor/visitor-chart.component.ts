import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Visitor, VisitorType, VisitorOptions } from './core/visitor.model';

@Component({
  selector: 'visitor-chart',
  template: `
    <div style="display: block">
      <canvas baseChart
      [data]="doughnutChartValues"
      [labels]="doughnutChartLabels"
      [chartType]="'doughnut'"
      width="100%"
      height="100%"></canvas>
    </div>
  `,
})
export class VisitorChartComponent implements OnInit, OnChanges {

  @Input() visitors: Visitor[];

  public doughnutChartLabels = VisitorOptions;
  public doughnutChartValues = [];

  ngOnInit() {
    this.doughnutChartValues = this.getDoughnutChartData();
  }

  ngOnChanges() {
    this.doughnutChartValues = this.getDoughnutChartData();
  }

  private getDoughnutChartData(): number[] {
    return this.doughnutChartLabels
      .map( visitorType => {
        return this.visitors ? this.visitors
          .filter(visitor => visitor.type === visitorType).length : 0;
      });
  }
}

