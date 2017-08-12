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
          tagline: 'This is a good project',
          description: 'This is the project',
          imageUrl: 'http://storage-download.googleapis.com/personal-website-156005.appspot.com/business_card_256x256.jpg',
          githubUrl: 'https://github.com/kml183/business-card',
          tags: ['electronics', 'embedded systems'],
        } as Project,
        {
          name: 'Project 1',
          tagline: 'This is a good project',
          description: 'This is the project',
          imageUrl: 'http://storage-download.googleapis.com/personal-website-156005.appspot.com/business_card_256x256.jpg',
          githubUrl: 'https://github.com/kml183/business-card',
          tags: ['electronics', 'embedded systems'],
        } as Project,
        {
          name: 'Project 1',
          tagline: 'This is a good project',
          description: 'This is the project',
          imageUrl: 'http://storage-download.googleapis.com/personal-website-156005.appspot.com/business_card_256x256.jpg',
          githubUrl: 'https://github.com/kml183/business-card',
          tags: ['electronics', 'embedded systems'],
        } as Project,
        {
          name: 'Project 2',
          tagline: 'This is a good project',
          description: 'This is the project',
          imageUrl: 'http://storage-download.googleapis.com/personal-website-156005.appspot.com/business_card_256x256.jpg',
          githubUrl: 'https://github.com/kml183/business-card',
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