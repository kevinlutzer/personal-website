

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { map, startWith } from 'rxjs/operators';
import { Activity, MODEL } from './activity.model';
import { Visitor } from 'src/app/overview/visitor';

@Injectable()
export class ActivityService {

  private _collection: AngularFirestoreCollection<Activity>;

  constructor(
    private angularFirestore: AngularFirestore
  ) {
    this._collection = this.angularFirestore.collection<Activity>(MODEL);
  }

  public get activities$(): Observable<Activity[]> {
    return this._collection
        .valueChanges()
        .pipe(
            map(v => this.sortVisitors(v))
        );
  }

  public get loading$(): Observable<boolean> {
    return this.activities$.pipe(
      startWith([]),
      map(v => !(v && !!(v.length))));
  }

  private sortVisitors(visitors: Activity[]): Activity[] {
    return visitors.sort((a, b) => {
        if (a.dateFinish && !b.dateFinish) {
            return 1;
        }

        return a.dateStart.toDate() - b.dateStart.toDate();
    });
  }

}
