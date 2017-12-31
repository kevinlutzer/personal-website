import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Activity } from './activity.model';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';

const url = 'https://us-central1-klutzer-personal-website.cloudfunctions.net/activityLIST';

export interface ActivityApiResponse {
    activities: Activity[];
    hasMore: boolean;
}

@Injectable()
export class ActivityApiService {

    constructor(
        private http: HttpClient
    ) {}
    public getAllActivities(): Observable<Activity[]> {
        return this.http
        .get<ActivityApiResponse>(url)
        .map(resp => resp.activities)
        .share();
    }
}
