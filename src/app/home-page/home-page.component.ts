import { Component, OnInit } from '@angular/core';

import { Project, ProjectService, Visitor, VisitorService, Activity, ActivityService } from '../core';
import { Observable } from 'rxjs';
@Component({
    selector: 'home-page',
    styleUrls: ['home-page.component.scss'],
    templateUrl: 'home-page.component.html'
})

export class HomePageComponent implements OnInit {

    projects: Observable<Project[]>;
    visitors: Observable<Visitor[]>;
    activities: Observable<Activity[]>;

    constructor(
        private projectService: ProjectService,
        private visitorService: VisitorService,
        private activityService: ActivityService
    ) {}

    ngOnInit() {
        this.projects = this.projectService.list();
        this.visitors = this.visitorService.list();
        this.activities = this.activityService.list();

        this.projects.subscribe((prj) => console.log(prj));
        this.visitors.subscribe((visitor) => console.log(visitor));
        this.activities.subscribe((activity) => console.log(activity));
    }
}
