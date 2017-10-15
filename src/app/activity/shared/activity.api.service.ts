import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import { Activity } from './activity.model';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';

const url = 'https://us-central1-personal-website-156005.cloudfunctions.net/activityLIST';

@Injectable()
export class ActivityApiService {

    constructor(
        private http: Http
    ) {}
    public getAllActivities(): Observable<Activity[]> {
        return this.http
        .get(url)
        .map((response: Response) => {
            return response.json().activities as Activity[];
        })
        .share();
    }
}
