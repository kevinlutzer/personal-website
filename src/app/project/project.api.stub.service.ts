import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from './project'

@Injectable()
export class ProjectApiStubService {

  constructor() { }

  public getAllProject(): Observable<Project[]> {
    return Observable.of(
    [
        {
          name: 'Project 1',
          description: 'This is the project',
          imageUrl: 'Image URL',
          githubUrl: 'Github URL',
          tags: ['electronics', 'embedded systems'],
        } as Project,
        {
          name: 'Project 2',
          description: 'This is the project',
          imageUrl: 'Image URL',
          githubUrl: 'Github URL',
          tags: ['electronics', 'embedded systems'],
        } as Project
    ])
    .share();
  }
}

export interface Project {
    name: string;
    description: string;
    imageUrl: string;
    githubUrl: string;
    tags: string[];
}