import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Activity } from './activity';

@Injectable()
export class ActivityStubService {
    public getAllActivities(): Observable<Activity[]> {
        let firstActivityData: any = {
            name: 'Software Developer',
            description: 'Vendasta produces a software platform for small an medium business to manage their online presence. I work in the marketplace division and develop software for vendors to integrate their products into our platform.',
            location: 'Vendasta\'s Saskatoon HQ',
            date_start: '2014-08-06T05:14:45.071Z',
            date_finish: '2017-08-06T05:14:45.071Z',
            activity_img_url: 'http://storage-download.googleapis.com/personal-website-156005.appspot.com/vendasta-logo.png',
            activity_url: 'https://vendasta.com'
        };
        let firstActivity = new Activity()
        firstActivity.fromApi(firstActivityData);
        return Observable.of(
            [
                firstActivity
            ])
            .share();
    }
}
