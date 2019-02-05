import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable, of } from 'rxjs';

import { VisitorDialogComponent, VisitorService, Visitor } from './visitor';
import { VisitorCreateApiResponseInterface } from './visitor/visitor.api.interface';
import { switchMap, startWith, tap, catchError } from 'rxjs/operators';
import { AlertService } from '../core';
import { HttpErrorResponse } from '@angular/common/http';

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
  public loading$: Observable<boolean>;
  public resp$: Observable<VisitorCreateApiResponseInterface>;
  // private subscriptions: Subscription[] = [];

  constructor(
    public mdDialog: MatDialog,
    public visitorService: VisitorService,
    public alertService: AlertService,
    @Inject('GOOGLE_STORAGE_DOCS_DOMAIN') private storageImageDomain: string
  ) {}

  public onStartSurveyClick(): void {
    const ref = this.mdDialog.open(
      VisitorDialogComponent,
      {width: '256px'}
    );

    // this.resp$ = ref.componentInstance.responseVisitor
    //   .pipe(
    //     startWith(null),
    //     switchMap(this.visitorService.create),
    //     catchError(this.handleError),
    //     tap(this.handleResponse)
    //   ).share()
  }

  // private handleError(err: HttpErrorResponse): Observable<VisitorCreateApiResponseInterface> {
  //   return of({} as VisitorCreateApiResponseInterface)
  // }

  // private handleResponse(resp: VisitorCreateApiResponseInterface) {
  //   if (resp && resp.message) {
  //     this.alertService.throwSuccessSnack("Succesfully create a visitor!")
  //   }
  // }

  public onOpenResume(): void {
    window.open(this.storageImageDomain + '/kevinlutzer_resume.pdf');
  }

  ngOnInit() {
    this.visitors$ = this.visitorService.visitors$;
    this.loading$ = this.visitorService.loading$;
    debugger;
  }

  ngOnDestroy() {

  }

}
