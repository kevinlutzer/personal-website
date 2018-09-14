

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Visitor } from './visitor.model';
import { VisitorApiService } from './visitor.api.service';

import { switchMap } from 'rxjs/operators';

import { AlertService } from '../../../core';

@Injectable()
export class VisitorService {

  constructor(
    private visitorApiService: VisitorApiService,
    private alertService: AlertService
  ) {
    this.loadMore$$.pipe(
      switchMap(() => {
        return this.visitorApiService.getVisitors()
      }),
    ).subscribe((val) => {
      this.visitors$$.next(val)
      this.loading$$.next(false);
    })
  }

  private loadMore$$ = new Subject()
  private loading$$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private visitors$$: BehaviorSubject<Visitor[]> = new BehaviorSubject(null)

  public get visitors$(): Observable<Visitor[]> {
      return this.visitors$$.asObservable()
  }

  public loadMore(): void {
      this.loadMore$$.next()
  }

  public loading(): Observable<boolean> {
    return this.loading$$.asObservable()
  }

  public put(visitor: Visitor): Observable<any> {
    return this.visitorApiService
      .putVisitor(visitor);
  }
}
