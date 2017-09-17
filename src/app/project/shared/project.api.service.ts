import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Project } from './project.model';

@Injectable()
export class ProjectApiService {

  constructor() {}

  public getAllProject(): Observable<Project[]> {
    return null;
  }
}
