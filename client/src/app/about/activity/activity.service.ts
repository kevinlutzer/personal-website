

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { map, startWith } from 'rxjs/operators';
import { Activity, MODEL } from './activity.model';

@Injectable()
export class ActivityService {

  private _collection: AngularFirestoreCollection<Activity>;

  constructor(
    private angularFirestore: AngularFirestore
  ) {
    this._collection = this.angularFirestore.collection<Activity>(MODEL);
  }

  public get activities$(): Observable<Activity[]> {
    return this._collection.valueChanges();
  }

  public get loading$(): Observable<boolean> {
    return this.activities$.pipe(
      startWith([]),
      map(v => !(v && !!(v.length))));
  }

}
