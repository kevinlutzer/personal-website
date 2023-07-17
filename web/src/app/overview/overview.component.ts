import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, combineLatest, Subscription, BehaviorSubject } from 'rxjs';
import { map, mapTo, filter, take } from 'rxjs/operators';
import { VisitorService, Visitor, VisitorType, VisitorDialogComponent } from './visitor';
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
  public recentProjectCtx$: Observable<OverviewData<Project>>;
  public visitorCtx$: Observable<OverviewData<Visitor[]>>;
  public loadingSetVisitorType$: Observable<boolean>;

  @ViewChild('visitorDialog', { static: false }) visitorDialog: VisitorDialogComponent | undefined;

  constructor(
    public visitorService: VisitorService,
    public alertService: AlertService,
    private activityService: ActivityService,
    private projectService: ProjectService
  ) {
    this.experiences$ = this.activityService.experience$;
    this.certifications$ = this.activityService.certifications$;
    this.loadingSetVisitorType$ = this.visitorService.loadingSetResponse$; 

    this.visitorCtx$ = combineLatest(
      this.visitorService.visitors$,
      this.visitorService.loading$
    ).pipe(
      map(([v, l]: [Visitor[], boolean]) => ({
        data: v,
        isLoading: l
      }))
    );

    this.recentProjectCtx$ = combineLatest(
      this.projectService.latestProject$(),
      this.projectService.isLoading$
    ).pipe(
      map(([p, l]: [Project, boolean]) => {return {
        data: p,
        isLoading: l
      };
    }));
  }

  public submitVisitor(vt: VisitorType): void {
    this.visitorService.setResponse$(vt)
      .pipe(take(1))
      .subscribe(
        (success: string) => {
          this.visitorDialog?.resetForm();
          this.alertService.throwSuccessSnack(success);
        },
        (err: any) => {
          this.alertService.throwErrorSnack("Failed to create the visitor")
        }
      );
  }

  onOpenResume(): void {
    window.open('/assets/docs/kevin_lutzer_resume.pdf');    
  }

  ngOnInit() {
    // load all of the visitors 
    this.visitorService.list();

  }

}
