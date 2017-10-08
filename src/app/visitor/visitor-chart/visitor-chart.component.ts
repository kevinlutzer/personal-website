import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Visitor, VisitorType, VisitorOptions } from '../shared/visitor.model';

@Component({
  selector: 'visitor-chart',
  templateUrl: './visitor-chart.component.html',
})
export class VisitorChartComponent implements OnInit {

  @Input() visitors: Visitor[];

  public doughnutChartLabels;

  ngOnInit() {
    this.doughnutChartLabels = VisitorOptions;
  }

  get doughnutChartData(): string[] {
    return this.doughnutChartLabels
      .map( visitorType => {
        return this.visitors ? this.visitors
          .filter(visitor => visitor.type === visitorType).length : 0;
      });
  }
}

