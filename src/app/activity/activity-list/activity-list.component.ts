import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Activity } from '../shared/activity.model';
import { ActivityService } from '../shared/activity.service';
import { Item } from '../../item';

import 'rxjs/add/operator/map';

@Component({
    selector: 'activity-list',
    template: `
        <item-list [items]="items | async" [height]="220"></item-list>
    `
})
export class ActivityListComponent implements OnInit {

    items: Observable<Item[]>;

    constructor(
        private activityService: ActivityService
    ) { }

    ngOnInit() {
        this.items = this.activityService
            .list()
            .map(activities => this.getDisplayItems(activities));
    }

    private getDisplayItems(activities: Activity[]): Item[] {
        return activities.map(activity => {
            return {
                title: activity.name,
                subTitle: activity.location,
                description: activity.description,
                content: activity.content,
                startDate: activity.dateStart,
                endDate: activity.dateFinish,
                icon: activity.activityImgUrl
            };
        });
    }
}