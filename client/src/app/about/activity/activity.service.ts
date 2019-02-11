

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { map, startWith, delay } from 'rxjs/operators';
import { Activity, MODEL } from './activity.model';

const DEFAULT_ACTIVITY = {
  title: '',
  location: '',
  description: '',
  content: '',
  activityImgUrl: '',
  activityUrl: '',
  dateStart: null,
} as Activity;

const DEFAULT_FRAME = [
  DEFAULT_ACTIVITY,
  DEFAULT_ACTIVITY,
  DEFAULT_ACTIVITY,
  DEFAULT_ACTIVITY
];

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
            startWith(DEFAULT_FRAME)
        );
  }

  public get isLoading$(): Observable<boolean> {
    return this.activities$.pipe(
      map(v => v === DEFAULT_FRAME)
    );
  }
}
