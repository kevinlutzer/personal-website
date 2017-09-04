import { Component, OnInit, Input } from '@angular/core';
import { Visitor, VisitorType, VisitorOptions } from '../shared';

@Component({
  selector: 'visitor-chart',
  templateUrl: './visitor-survey-chart.component.html',
  styleUrls: ['./visitor-survey-chart.component.css']
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

