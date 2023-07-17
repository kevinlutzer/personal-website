import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, Subscription, BehaviorSubject } from 'rxjs';
import { map, tap, mapTo, filter, take } from 'rxjs/operators';
import { VisitorService, Visitor, VisitorType } from './visitor';
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
    new Visitor(
      'Other'
    )
  ];

  public experiences$: Observable<Activity[]>;
  public certifications$: Observable<Activity[]>;

  public isCreatingVisitor$$ = new BehaviorSubject(false);
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

  public submitVisitor(vt: VisitorType): void {
    
    this.visitorService.setResponse$(vt)
    .pipe(take(1))
    .subscribe(
      _ => this.alertService.throwSuccessSnack("Successfully created the visitor!"),
      _ => this.alertService.throwErrorSnack("Failed to create the visitor"),
    )
  }

  onOpenResume(): void {
    window.open('/assets/docs/kevin_lutzer_resume.pdf');    
  }

  ngOnInit() {
    // load all of the visitors 
    this.visitorService.list();

    this.experiences$ = this.activityService.experience$;
    this.certifications$ = this.activityService.certifications$;

    this.visitorCtx$ = combineLatest(
      this.visitorService.visitors$,
      this.visitorService.loading$
    ).pipe(
      map(([v, l]) => ({
        data: v,
        isLoading: l
      }))
    );

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
