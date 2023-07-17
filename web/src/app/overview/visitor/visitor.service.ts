

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError, take, tap, mapTo } from 'rxjs/operators';

import { Visitor, VisitorListResponseInterface, VisitorType } from './visitor.interface';
import { HttpClient } from '@angular/common/http';
import { AlertService, defaultErrorHandler } from 'src/app/core';
import { environment } from 'src/environments/environment';



@Injectable()
export class VisitorService {

  constructor(
    private http: HttpClient,
    private alertService: AlertService,
  ) {
  }

  private loadingSetResponse$$ = new BehaviorSubject<boolean>(false);
  loadingSetResponse$ = this.loadingSetResponse$$.asObservable();

  private loading$$ = new BehaviorSubject<boolean>(false);
  loading$ = this.loading$$.asObservable();

  private visitors$$ = new BehaviorSubject<Visitor[]>([]);
  visitors$ = this.visitors$$.asObservable();

  public list(): void {
    this.loading$$.next(true);
    this.http.get(environment.apiHost + '/v1/visitor/list').pipe(
      map((resp: VisitorListResponseInterface) => {
        resp.resiult.map(apiVisitor => new Visitor(apiVisitor.visitorType))
      }),
      tap(_ => this.loading$$.next(false)),
      catchError(err => {
        console.log(err);
        this.loading$$.next(false);
        return defaultErrorHandler(err);
      }),
      take(1),
    ).subscribe({
      next: (visitors: Visitor[]) => this.visitors$$.next(visitors),
      error: (err: any) => {
        console.error(err);
        this.alertService.throwErrorSnack(err);
      },
    })
  }

  public setResponse$(visitorType: VisitorType): Observable<void> {
    this.loadingSetResponse$$.next(true);
    return this.http.post(environment.apiHost + '/v1/visitor/list', { visitorType: visitorType }).pipe(
      mapTo(null),
      tap(_ => this.loadingSetResponse$$.next(false)),
    );
  }
}
