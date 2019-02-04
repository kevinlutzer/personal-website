

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

import { Visitor } from './visitor.model';
import { VisitorApiService } from './visitor.api.service';



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

  public put(visitor: Visitor): Observable<any> {
    return this.visitorApiService
      .putVisitor(visitor);
  }
}
