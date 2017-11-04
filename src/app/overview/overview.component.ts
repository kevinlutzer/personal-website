import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { VisitorDialogComponent, VisitorService, Visitor } from './../visitor';

const resumeUrl = 'https://storage-download.googleapis.com/personal-website-docs-klutzer/kevinlutzer_resume.pdf';

@Component({
  selector: 'app-overview',
  templateUrl: 'overview.component.html'
})
export class OverviewComponent implements OnInit {

  public visitors: Observable<Visitor[]>;

  constructor(
    public mdDialog: MatDialog,
    private visitorService: VisitorService
  ) {}

  public onStartSurveyClick(): void {
    this.mdDialog.open(
      VisitorDialogComponent,
      {width: '256px'}
    );
  }

  public onOpenResume(): void {
    window.open(resumeUrl);
  }

  ngOnInit() {
    this.visitors = this.visitorService.list();
  }

}
