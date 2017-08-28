import { Component, OnInit, Input } from '@angular/core';

import { Visitor, VisitorType } from '../../core';

@Component({
  selector: 'survey-chart',
  templateUrl: './survey-chart.component.html',
  styleUrls: ['./survey-chart.component.css']
})
export class SurveyChartComponent implements OnInit {

  @Input() visitors: Visitor[];

  public doughnutChartLabels;
  public doughnutChartData;

  ngOnInit() {
    this.doughnutChartLabels = this.visitors.map(visitor => visitor.type);
    this.doughnutChartData = this.doughnutChartLabels.map( visitorType =>
      this.visitors.filter(visitor => visitor.type === visitorType).length );

  }

}

