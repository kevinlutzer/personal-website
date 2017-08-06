import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Activity } from './activity';
import { ActivityApiService } from './activity.service.api';

@Injectable()
export class ActivityService {
    constructor(private activityApiService: ActivityApiService){}

    public list(): Observable<Activity[]> {
        return this.activityApiService.getAllActivities();
    }    
}
