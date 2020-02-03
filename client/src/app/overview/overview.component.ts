import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable, of, Subscription } from 'rxjs';
import { switchMap, catchError, tap} from 'rxjs/operators';

import { VisitorDialogComponent, VisitorService, Visitor } from './visitor';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertService } from '../core';
import { VisitorCreateApiResponseInterface } from './visitor/visitor.api.interface';

@Component({
  selector: 'app-overview',
  templateUrl: 'overview.component.html',
  styles: [`
    .bio-img {
        border-radius: 50%;
    }

    .survey-call-to-action:hover {
        box-shadow: 0 8px 8px rgba(10,16,20,.24), 0 0 8px rgba(10,16,20,.12) !important;
        cursor: pointer;
    }
  `]
})
export class OverviewComponent implements OnInit {

  public visitors$: Observable<Visitor[]>;
  public loading$: Observable<boolean>;
  public subscriptions: Subscription[] = [];
  public defaultVisitors: Visitor[] = [
    Visitor.fromApi({
      type: 'Other'
    })
  ];

  constructor(
    public mdDialog: MatDialog,
    public visitorService: VisitorService,
    public alertService: AlertService,
    @Inject('GOOGLE_STORAGE_DOCS_DOMAIN') private storageImageDomain: string
  ) {}

  public onStartSurveyClick(): void {
    this.subscriptions.push(
      this.mdDialog.open(
        VisitorDialogComponent,
        {width: '256px'}
      )
        .componentInstance
        .visitorSubmitted$$
        .pipe(
          switchMap(v => this.visitorService.create(v)),
        )
        .subscribe(
          data => this.handleSuccess(data),
          err => this.handleError(err),
        )
    );
  }

  private handleSuccess(resp: VisitorCreateApiResponseInterface) {
    this.alertService.throwSuccessSnack("Successfully created the visitor!");
  }

  private handleError(err: HttpErrorResponse) {
    this.alertService.throwErrorSnack("Failed to create the visitor");
  }

  public onOpenResume(): void {
    window.open(this.storageImageDomain + '/kevinlutzer_resume.pdf');
  }

  ngOnInit() {
    this.visitors$ = this.visitorService.visitors$;
    this.loading$ = this.visitorService.loading$;
  }

}
