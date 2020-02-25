

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
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

  public get experience$(): Observable<Activity[]> {
    return this._collection
        .valueChanges()
        .pipe(
          startWith(DEFAULT_FRAME),
        );
  }

  public get certifications(): Observable<Activity[]> {
    return of([
      {
        title: 'Certified ScrumMaster',
        location: 'Saskatoon, SK, Canada',
        description: 'Course for being a Certified ScrumMaster.',
        content: 'This is a course describing the role and responsibility of a Scrume Master. In this course I learned advance scrum concepts as well as had and how to be an effective Scrum Master',
        activityImgUrl: '',
        activityUrl: 'https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster',
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
