import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Activity } from './activity';

@Injectable()
export class ActivityStubService {
    public getAllActivities(): Observable<Activity[]> {
        return Observable.of(
            [
                {
                    name: 'University'
                } as Activity,
                {
                    name: 'Vendasta'
                } as Activity,
            ])
            .share();
    }
}
