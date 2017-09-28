import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Activity } from './activity.model';
import { ActivityStubService } from './activity.stub.service';

@Injectable()
export class ActivityService {
    constructor(private activityStubService: ActivityStubService) {}

    public list(): Observable<Activity[]> {
        return this.activityStubService.getAllActivities();
    }
}
