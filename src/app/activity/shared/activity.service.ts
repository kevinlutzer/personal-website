import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Activity } from './activity.model';
import { ActivityApiService } from './activity.api.service';
import { AlertService } from './../../core';

@Injectable()
export class ActivityService {
    constructor(
        private activityApiService: ActivityApiService,
        private alertService: AlertService
    ) {}

    public list(): Observable<Activity[]> {
        const activities = this.activityApiService.getAllActivities();
        activities.subscribe(
            () => null,
            (error) => this.alertService.throwErrorSnack('Oops! We were not able to load my experience!')
        );
        return activities;
    }
}
