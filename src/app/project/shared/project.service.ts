import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Project } from './project.model';
import { ProjectApiService } from './project.api.service';
import { AlertService } from './../../core';

@Injectable()
export class ProjectService {

  projects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>(null);

  constructor(
    private projectApiService: ProjectApiService,
    private alertService: AlertService
  ) { }

  public list(): Observable<Project[]> {
    this.projectApiService.getAllProject()
    .subscribe(
      projects => this.projects.next(projects),
      err => this.alertService.throwErrorSnack('Oops! Sorry, we can\'t fetch any projects')
    );
    return this.projects.asObservable();
  }
}
