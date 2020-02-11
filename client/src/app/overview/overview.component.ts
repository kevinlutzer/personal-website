import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable, combineLatest, Subscription } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { VisitorDialogComponent, VisitorService, Visitor } from './visitor';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertService } from '../core';
import { VisitorCreateApiResponseInterface } from './visitor/visitor.api.interface';
import { ActivityService, Activity } from './activity';

@Component({
  selector: 'app-overview',
  templateUrl: 'overview.component.html',
  styleUrls: ['./overview.component.scss']
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

  public activityCtx$: Observable<{
    activities: Activity[],
    isLoading: boolean;
  }>;

  constructor(
    public mdDialog: MatDialog,
    public visitorService: VisitorService,
    public alertService: AlertService,
    private activityService: ActivityService,
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


    this.activityCtx$ = combineLatest(
      this.activityService.activities$,
      this.activityService.isLoading$
    ).pipe(
      map(([a, l]) => {return {
        activities: a,
        isLoading: l
      };
    }));
  }

}
