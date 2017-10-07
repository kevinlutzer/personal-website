import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Project } from './project.model';
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
