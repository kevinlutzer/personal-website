

import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Visitor } from './visitor.model';
import { VisitorApiService } from './visitor.api.service';



import { switchMap } from 'rxjs/operators';

@Injectable()
export class VisitorService {

  private _collection: AngularFirestoreCollection<Visitor>;

  constructor(
    private visitorApiService: VisitorApiService,
    private angularFireService: AngularFireFunctions,
    private angularFirestore: AngularFirestore
  ) {
    this._collection = this.angularFirestore.collection<Visitor>('Visitor');
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
    return this._collection.valueChanges();
  }

  public loadMore(): void {
      this.loadMore$$.next()
  }

  public loading(): Observable<boolean> {
    return this.loading$$.asObservable()
  }

  public put(visitor: Visitor): Observable<any> {
    // const f = this.angularFireService.httpsCallable("Visitor");
    // f.call
    return this.visitorApiService
      .putVisitor(visitor);
  }
}
