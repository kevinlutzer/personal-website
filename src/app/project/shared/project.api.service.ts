import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Project } from './project.model';
import { Http, Response } from '@angular/http';

const url = 'https://us-central1-personal-website-156005.cloudfunctions.net/projectLIST';

@Injectable()
export class ProjectStubService {

    constructor(
        private http: Http
    ) { }

    public getAllProject(): Observable<Project[]> {
        return this.http
            .get(url)
            .map((response: Response) => {
                return response.json().visitors as Project[];
            })
            .share();
    }
}
