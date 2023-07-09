import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
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

  private _collection = []

  constructor() {
    this._collection = [];
  }

  public get projects$(): Observable<Project[]> {
    return of(this._collection)
        .pipe(
            startWith(DEFAULT_FRAME)
        );
  }

  public latestProject$(): Observable<Project> {
    return of(this._collection)
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
