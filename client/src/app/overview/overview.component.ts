import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

import { VisitorDialogComponent, VisitorService, Visitor } from './visitor';

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
    public visitorService: VisitorService,

    @Inject('GOOGLE_STORAGE_DOCS_DOMAIN') private storageImageDomain: string
  ) {}

  public onStartSurveyClick(): void {
    this.mdDialog.open(
      VisitorDialogComponent,
      {width: '256px'}
    );
  }

  public onOpenResume(): void {
    window.open(this.storageImageDomain + '/kevinlutzer_resume.pdf');
  }

  ngOnInit() {
    this.visitors$ = this.visitorService.visitors$;
  }

}
