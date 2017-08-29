import { Component, OnInit, Input } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { Observable } from 'rxjs';

import { Visitor } from '../../core';

@Component({
  selector: 'app-visitor-survey-table',
  templateUrl: './visitor-survey-table.component.html',
  styleUrls: ['./visitor-survey-table.component.css']
})
export class VisitorSurveyTableComponent implements OnInit {

  @Input() visitors: Visitor[];

  constructor() { }

  dataSource: VisitorDataSource;
  displayLabels = ['ipAddress', 'visitorType'];

  ngOnInit() {
    this.dataSource = new VisitorDataSource(this.visitors);
    console.log(this.dataSource);
  }

}

export class VisitorDataSource extends DataSource<any> {
  constructor( public visitorList: Visitor[]) {
    super();
  }

  connect(): Observable<Visitor[]> {
    return Observable.of(this.visitorList);
  }

  disconnect() {}
}
