import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Project } from './project.model';
import { ProjectStubService } from './project.stub.service';

@Injectable()
export class ProjectService {

  projects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>(null);

  constructor(
    private projectStubService: ProjectStubService
  ) { }

  public list(): Observable<Project[]> {
    this.projectStubService.getAllProject()
    .subscribe((projects) => {
      this.projects.next(projects);
    });
    return this.projects.asObservable();
  }
}
