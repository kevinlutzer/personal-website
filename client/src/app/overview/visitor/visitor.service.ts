

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';

import { Visitor, MODEL } from './visitor.model';
import { VisitorApiService } from './visitor.api.service';



import { switchMap } from 'rxjs/operators';
import { VisitorCreateApiResponseInterface } from './visitor.api.interface';

@Injectable()
export class VisitorService {

  private _collection: AngularFirestoreCollection<Visitor>;

  constructor(
    private visitorApiService: VisitorApiService,
    private angularFirestore: AngularFirestore
  ) {
    this._collection = this.angularFirestore.collection<Visitor>(MODEL);
  }

  public get visitors$(): Observable<Visitor[]> {
    return this._collection.valueChanges();
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
