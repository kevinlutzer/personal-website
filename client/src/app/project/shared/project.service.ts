import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, startWith, filter } from 'rxjs/operators';
import { Project, MODEL } from './project.model';

const DEFAULT_PROJECT = {
  name: '',
  tagline: '',
  description: '',
  imageUrl: '',
  githubUrl: '',
  tags: [],
  startDate: null,
  endDate: null,
} as Project;

const DEFAULT_FRAME = [
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

  public get$(readableId: string): Observable<Project> {
    return (this.projects$).pipe(
      filter(p => p.)
    );
  }

  public get projects$(): Observable<Project[]> {
    return this._collection
        .valueChanges()
        .pipe(
            startWith(DEFAULT_FRAME)
        );
  }

  public latestProject$(): Observable<Project> {
    return this._collection
      .valueChanges()
      .pipe(
        filter(Boolean),
        map((pjs: Project[]) => (pjs || []).reduce((prev: Project, curr: Project) => {
          if (prev.startDate > curr.startDate) {
            return prev;
          }
          return curr;
        }, {startDate: new Date(null)} as Project))
    )
  }

  public get isLoading$(): Observable<boolean> {
    return this.projects$.pipe(
      map(v => v === DEFAULT_FRAME)
    );
  }
}
