import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Activity } from './activity.model';

@Injectable()
export class ActivityApiService {
    public getAllActivities(): Observable<Activity[]> {
        return null;
    }
}