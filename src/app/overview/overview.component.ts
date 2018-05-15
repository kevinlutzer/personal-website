import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { VisitorDialogComponent, VisitorService, Visitor } from './../visitor';

const resumeUrl = 'https://storage.googleapis.com/personal-website-klutzer-docs/kevinlutzer_resume.pdf';

@Component({
  selector: 'app-overview',
  templateUrl: 'overview.component.html',
  styles: [`
    .bio-img {
        border-radius: 50%;
    }

    .survey-call-to-action:hover {
        box-shadow: 0 8px 8px rgba(10,16,20,.24), 0 0 8px rgba(10,16,20,.12) !important;
    }
  `]
})
export class OverviewComponent implements OnInit {

  public visitors$: Observable<Visitor[]>;

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
    this.visitors$ = this.visitorService.list();
  }

}
