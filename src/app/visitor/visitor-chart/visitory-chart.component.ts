import { Component, OnInit, Input } from '@angular/core';

import { Visitor, VisitorType, VisitorOptions } from '../../core';

@Component({
  selector: 'visitor-survey-chart',
  templateUrl: './visitor-survey-chart.component.html',
  styleUrls: ['./visitor-survey-chart.component.css']
})
export class VisitorSurveyChartComponent implements OnInit {

  @Input() visitors: Visitor[];

  public doughnutChartLabels;
  public doughnutChartData;

  ngOnInit() {
    this.doughnutChartLabels = VisitorOptions;
    this.doughnutChartData = this.doughnutChartLabels.map( visitorType =>
      this.visitors.filter(visitor => visitor.type === visitorType).length );
  }

}

