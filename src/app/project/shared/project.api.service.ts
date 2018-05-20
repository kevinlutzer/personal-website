import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project.model';
import { HttpClient } from '@angular/common/http';
import { map, share } from 'rxjs/operators';

const url = 'https://us-central1-klutzer-personal-website.cloudfunctions.net/projectLIST';

export interface ProjectApiResponse {
    hasMore: boolean;
    projects: Project[];
}

@Injectable()
export class ProjectApiService {

    constructor(
        private http: HttpClient
    ) { }

    public getAllProject(): Observable<Project[]> {
        return this.http
            .get<ProjectApiResponse>(url)
            .map(resp => resp.projects)
            .share();
    }
}
