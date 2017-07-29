import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from './project';

@Injectable()
export class ProjectApiService {

  constructor() {}

  public getAllProject(): Observable<Project[]> {
    return null;
  }
}
