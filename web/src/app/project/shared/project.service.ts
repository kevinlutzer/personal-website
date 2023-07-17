import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { Project, Projects } from './project.model';

const DEFAULT_PROJECT = {
  name: '',
  tagline: '',
  description: '',
  imageUrl: '',
  githubUrl: '',
  tags: [],
  startDate: new Date(),
  endDate: new Date(),
} as Project;

const DEFAULT_FRAME = [
  DEFAULT_PROJECT,
  DEFAULT_PROJECT,
  DEFAULT_PROJECT,
  DEFAULT_PROJECT
];

@Injectable()
export class ProjectService {

  // @kevinlutzer fix this so we don't have to hardcode the website data
  public get projects$(): Observable<Project[]> {
    return of(Projects)
  }

  public latestProject$(): Observable<Project> {
    return this.projects$
      .pipe(
        filter(Boolean),
        map((pjs: Project[]) => (pjs || []).reduce((prev: Project, curr: Project) => {
          if (prev.startDate > curr.startDate) {
            return prev;
          }
          return curr;
        }, {startDate: new Date()} as Project))
    )
  }

  public get isLoading$(): Observable<boolean> {
    return this.projects$.pipe(
      map(v => v === DEFAULT_FRAME)
    );
  }
}
