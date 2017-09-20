import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { VisitorDialogComponent, VisitorService, Visitor } from './../visitor';

@Component({
  selector: 'app-overview',
  templateUrl: 'overview.component.html'
})
export class OverviewComponent implements OnInit {

  public visitors: Observable<Visitor[]>;

  constructor(
    public mdDialog: MdDialog,
    private visitorService: VisitorService
  ) {}

  public onStartSurveyClick(): void {
    this.mdDialog.open(
      VisitorDialogComponent,
      {width: '256px'}
    );
  }

  ngOnInit() {
    this.visitors = this.visitorService.list();
  }

}
