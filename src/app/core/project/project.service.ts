import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Project } from './project';
import { ProjectApiService } from './project.api.service';

@Injectable()
export class ProjectService {

  projects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>(null);

  constructor(
    private projectApiService: ProjectApiService
  ) { }

  public list(): Observable<Project[]> {
    this.projectApiService.getAllProject()
    .subscribe((projects) => {
      this.projects.next(projects);
    });
    return this.projects.asObservable();
  }
}
