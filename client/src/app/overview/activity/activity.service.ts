

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
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

  public get experience$(): Observable<Activity[]> {
    return this._collection
        .valueChanges()
        .pipe(
          startWith(DEFAULT_FRAME),
        );
  }

  public get certifications$(): Observable<Activity[]> {
    return of([
      {
        title: 'Scrum ',
        location: 'Saskatoon SK, CA.',
        description: '',
        content: '',
        activityImgUrl: ''
        activityUrl: string;
        dateStart: any;
        dateFinish?: any;
      } as Activity,
      {} as Activity
    ])
  }

  public get isLoading$(): Observable<boolean> {
    return this.experience$.pipe(
      map(v => v === DEFAULT_FRAME)
    );
  }
}
