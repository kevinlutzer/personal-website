import { Component, OnInit } from '@angular/core';

import { Project, ProjectService, Visitor, VisitorService, Activity, ActivityService } from '../core';
import { Observable } from 'rxjs';

import { Item } from '../common';
@Component({
    selector: 'app-home-page',
    styleUrls: ['home-page.component.scss'],
    templateUrl: 'home-page.component.html'
})

export class HomePageComponent implements OnInit {

    projects: Observable<Project[]>;
    visitors: Observable<Visitor[]>;
    activities: Observable<Activity[]>;

    testItem: any;

    constructor(
        private projectService: ProjectService,
        private visitorService: VisitorService,
        private activityService: ActivityService
    ) {}

    ngOnInit() {

        this.testItem = {
            title: 'Project 1',
            subTitle: 'This is a good project',
            description: 'This is the project',
            imageUrl: 'http://storage-download.googleapis.com/personal-website-156005.appspot.com/business_card_256x256.jpg',
            actionUrl: 'https://github.com/kml183/business-card',
            tags: ['electronics', 'embedded systems'],
        } as Item;

        this.projects = this.projectService.list();
        this.visitors = this.visitorService.list();
        this.activities = this.activityService.list();

        this.projects.subscribe((prj) => console.log(prj));
        this.visitors.subscribe((visitor) => console.log(visitor));
        this.activities.subscribe((activity) => console.log(activity));
    }
}
