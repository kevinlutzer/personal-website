import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Activity } from './activity.model';
import { ActivityApiService } from './activity.api.service';

@Injectable()
export class ActivityService {
    constructor(private activityApiService: ActivityApiService) {}

    public list(): Observable<Activity[]> {
        return this.activityApiService.getAllActivities();
    }
}
