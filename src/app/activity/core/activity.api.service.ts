import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/observable/of';

import { HttpClient } from '@angular/common/http';

import { Activity } from './activity.model';

// import 'rxjs/add/observable/of';
// import 'rxjs/observable/map';
// import { map, share } from "rxjs/operators";

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
