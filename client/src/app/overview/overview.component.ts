import { Component, OnInit, Inject } from '@angular/core';
import { Observable, combineLatest, Subscription } from 'rxjs';
import { switchMap, map, filter } from 'rxjs/operators';

import { VisitorDialogComponent, VisitorService, Visitor } from './visitor';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertService } from '../core';
import { VisitorCreateApiResponseInterface } from './visitor/visitor.api.interface';
import { ActivityService, Activity } from './activity';
import { Project, ProjectService } from '../project';

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

  public recentProjectCtx$: Observable<{
    project: Project,
    isLoading: boolean;
  }>;

  constructor(
    public visitorService: VisitorService,
    public alertService: AlertService,
    private activityService: ActivityService,
    private projectService: ProjectService,
    @Inject('GOOGLE_STORAGE_DOCS_DOMAIN') private storageImageDomain: string
  ) {}

  public submitVisitor(v: Visitor): void {
    this.visitorService.create(v)
    .subscribe(
      _ => this.alertService.throwSuccessSnack("Successfully created the visitor!"),
      _ => this.alertService.throwErrorSnack("Failed to create the visitor"),
    )
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

    this.recentProjectCtx$ = combineLatest(
      this.projectService.latestProject$(),
      this.projectService.isLoading$
    ).pipe(
      map(([p, l]) => {return {
        project: p,
        isLoading: l
      };
    }));
  }

}
