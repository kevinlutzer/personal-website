

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError, take, tap, mapTo } from 'rxjs/operators';

import { ApiVisitor, Visitor, VisitorType } from './visitor.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlertService, ApiResponse, defaultErrorHandler } from 'src/app/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class VisitorService {

  constructor(
    private http: HttpClient,
    private alertService: AlertService,
  ) {
  }

  private loading$$ = new BehaviorSubject<boolean>(false);
  loading$ = this.loading$$.asObservable();

  private visitors$$ = new BehaviorSubject<Visitor[]>([]);
  visitors$ = this.visitors$$.asObservable();

  public list(): void {
    this.loading$$.next(true);
    this.http.post<ApiResponse<ApiVisitor[]>>(environment.apiHost + '/v1/visitor/list', {}).pipe(
      map((resp: ApiResponse<ApiVisitor[]>) => {
        resp.result = resp.result || []; 
        return <ApiVisitor[]>(resp?.result)?.map((apiVisitor: ApiVisitor) => new Visitor(apiVisitor.visitorType))
      }),
      tap(() => this.loading$$.next(false)),
      catchError((err: HttpErrorResponse) => {
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

  public setResponse$(visitorType: VisitorType): Observable<string> {
    return this.http.post<ApiResponse<null>>(environment.apiHost + '/v1/visitor/setvisitortype', { visitorType: visitorType }).pipe(
      map((resp: ApiResponse<null>) => resp.success),
      tap(_ => this.list()),
    );
  }
}
