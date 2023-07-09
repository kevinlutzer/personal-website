

import { Injectable } from '@angular/core';
import { } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';

import { Visitor } from './visitor.model';
import { VisitorApiService } from './visitor.api.service';

import { VisitorCreateApiResponseInterface } from './visitor.api.interface';

@Injectable()
export class VisitorService {
  _collection = [];

  constructor(
    private visitorApiService: VisitorApiService,
  ) {}

  public get visitors$(): Observable<Visitor[]> {
    return of(this._collection);
  }

  public get loading$(): Observable<boolean> {
    return this.visitors$.pipe(
      startWith([]),
      map(v => !(v && !!(v.length))),
      catchError(() => of(false))
    );
  }

  public create(visitor: Visitor): Observable<VisitorCreateApiResponseInterface> {
    return this.visitorApiService
      .create(visitor);
  }
}
