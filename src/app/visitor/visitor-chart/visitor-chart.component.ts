import { Component, OnInit, Input } from '@angular/core';
import { Visitor, VisitorType, VisitorOptions } from '../shared/visitor.model';

@Component({
  selector: 'visitor-chart',
  templateUrl: './visitor-chart.component.html',
})
export class VisitorChartComponent implements OnInit {

  @Input() visitors: Visitor[];

  public doughnutChartLabels;
  public doughnutChartData;

  ngOnInit() {
    this.doughnutChartLabels = VisitorOptions;
    this.doughnutChartData = this.doughnutChartLabels.map( visitorType =>
      this.visitors.filter(visitor => visitor.type === visitorType).length );
  }

}

