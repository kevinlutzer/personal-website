import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Activity } from '../shared/activity.model';
import { ActivityService } from '../shared/activity.service';

import 'rxjs/add/operator/map';

@Component({
    selector: 'activity-list',
    template: `
    <h1>Hello World</h1>
    `
})
export class ActivityListComponent implements OnInit {

    activities: Observable<Activity[]>;

    constructor(
        private activityService: ActivityService
    ) { }

    ngOnInit() {
        this.activities = this.activityService
            .list();
    }

    // private getDisplayItems(activities: Activity[]): Item[] {
    //     return activities.map(activity => {
    //         return {
    //             title: activity.title,
    //             subTitle: activity.location,
    //             description: activity.description,
    //             content: activity.content,
    //             startDate: activity.dateStart,
    //             endDate: activity.dateFinish,
    //             icon: activity.activityImgUrl
    //         };
    //     });
    // }
}
