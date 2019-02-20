import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Project, MODEL } from './project.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const DEFAULT_PROJECT = {
  name: '',
  tagline: '',
  description: '',
  imageUrl: '',
  githubUrl: '',
  tags: [],
  startDate: null,
} as Project;

const DEFAULT_FRAME = [
  DEFAULT_PROJECT,
  DEFAULT_PROJECT,
  DEFAULT_PROJECT,
  DEFAULT_PROJECT,
  DEFAULT_PROJECT,
  DEFAULT_PROJECT
];

@Injectable()
export class ProjectService {

  private _collection: AngularFirestoreCollection<Project>;

  constructor(
    private angularFirestore: AngularFirestore
  ) {
    this._collection = this.angularFirestore.collection<Project>(MODEL);
  }

  public get projects$(): Observable<Project[]> {
    return this._collection.valueChanges();
  }

  public get isLoading$(): Observable<boolean> {
    return this.projects$.pipe(
      map(p => p === DEFAULT_FRAME)
    );
  }
}
