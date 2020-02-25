import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, Subscription, BehaviorSubject } from 'rxjs';
import { map, tap, mapTo, filter } from 'rxjs/operators';
import { VisitorService, Visitor } from './visitor';
import { AlertService } from '../core';
import { ActivityService, Activity } from './activity';
import { Project, ProjectService } from '../project';



interface OverviewData<T> {
  data: T;
  isLoading: boolean;
}

@Component({
  selector: 'app-overview',
  templateUrl: 'overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public subscriptions: Subscription[] = [];
  public defaultVisitors: Visitor[] = [
    Visitor.fromApi({
      type: 'Other'
    })
  ];

  public isCreatingVisitor$$ = new BehaviorSubject(false);
  public activityCtx$: Observable<OverviewData<Activity[]>>;
  public recentProjectCtx$: Observable<OverviewData<Project>>;
  public visitorCtx$: Observable<OverviewData<Visitor[]>>;

  constructor(
    public visitorService: VisitorService,
    public alertService: AlertService,
    private activityService: ActivityService,
    private projectService: ProjectService
  ) {}

  public getResetFormEvent$(): Observable<void> {
    return this.isCreatingVisitor$$.asObservable().pipe(
      filter(v => !v),
      mapTo(null),
    )
  }

  public submitVisitor(v: Visitor): void {
    
    this.isCreatingVisitor$$.next(true);

    this.visitorService.create(v)
    .pipe(
      tap( _ => {
        this.isCreatingVisitor$$.next(false);
      }),
    )
    .subscribe(
      _ => this.alertService.throwSuccessSnack("Successfully created the visitor!"),
      err => {
        this.alertService.throwErrorSnack("Failed to create the visitor");
        console.log(err)
      }
    )
  }

  onOpenResume(): void {
    window.open('/assets/docs/kevin_lutzer_resume.pdf');    
  }

  ngOnInit() {

    this.visitorCtx$ = combineLatest(
      this.visitorService.visitors$,
      this.visitorService.loading$
    ).pipe(
      map(([v, l]) => ({
        data: v,
        isLoading: l
      }))
    );

    this.activityCtx$ = combineLatest(
      this.activityService.activities$,
      this.activityService.isLoading$
    ).pipe(
      map(([a, l]) => {return {
        data: a,
        isLoading: l
      };
    }));

    this.recentProjectCtx$ = combineLatest(
      this.projectService.latestProject$(),
      this.projectService.isLoading$
    ).pipe(
      map(([p, l]) => {return {
        data: p,
        isLoading: l
      };
    }));
  }

}
