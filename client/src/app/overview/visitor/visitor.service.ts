

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { map, startWith } from 'rxjs/operators';
import { of } from 'rxjs';

import { Visitor } from './visitor.model';
import { VisitorApiService } from './visitor.api.service';
import { VisitorCreateApiResponseInterface } from './visitor.api.interface';



import { switchMap } from 'rxjs/operators';

@Injectable()
export class VisitorService {

  private _collection: AngularFirestoreCollection<Visitor>;

  constructor(
    private visitorApiService: VisitorApiService,
    private angularFirestore: AngularFirestore
  ) {
    this._collection = this.angularFirestore.collection<Visitor>('Visitor');
  }

  public get visitors$(): Observable<Visitor[]> {
    return this._collection.valueChanges();
  }

  public get loading$(): Observable<boolean> {
    return this.visitors$.pipe(
      startWith([]), 
      map(v => !(v && !!(v.length))))
  }

  public create(visitor: Visitor): Observable<VisitorCreateApiResponseInterface> {
    if (!visitor) { 
      return of(null);
    }
    return this.visitorApiService
      .create(visitor);
  }
}
