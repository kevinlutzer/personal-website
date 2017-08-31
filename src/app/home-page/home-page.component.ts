import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { Project, ProjectService, Visitor, VisitorService, Activity, ActivityService } from '../core';
import { Observable } from 'rxjs';

import { Item, AlertService } from '../core';
import { VisitorSurveyDialogComponent } from '../common';
@Component({
    selector: 'app-home-page',
    styleUrls: ['home-page.component.scss'],
    templateUrl: 'home-page.component.html'
})

export class HomePageComponent implements OnInit {

    projectItems: Observable<Item[]>;
    visitors: Observable<Visitor[]>;
    activityItems: Observable<Item[]>;

    testItems: any;

    constructor(
        private projectService: ProjectService,
        private visitorService: VisitorService,
        private activityService: ActivityService,
        private alertService: AlertService,
        private mdDialog: MdDialog
    ) {}


    openDialog() {
        this.mdDialog.open(VisitorSurveyDialogComponent);
    }

    ngOnInit() {

        this.projectItems = this.projectService
            .list()
            .map((projects) => this.mapProjectsToItems(projects));

        this.activityItems = this.activityService
            .list()
            .map((activity) => this.mapActivitiesToItems(activity));

        this.visitors = this.visitorService
            .list();

        this.visitors.subscribe((visitors) => console.log(visitors));
    }

    mapProjectsToItems( projects: Project[]): Item[] {
        return projects.map( project => {
            return {
                title: project.name,
                subTitle: project.tagline,
                description: project.description,
                tags: project.tags,
                actionUrl: project.githubUrl,
                imageUrl: project.imageUrl,
                startDate: project.startDate,
                endDate: project.endDate
            } as Item;
        });
    }

    mapActivitiesToItems( activities: Activity[] ): Item[] {
        return activities.map( activity => {
            return {
                title: activity.name,
                subTitle: activity.location,
                description: activity.description,
                content: activity.content,
                iconUrl: activity.activityImgUrl,
                startDate: activity.dateStart,
                endDate: activity.dateFinish
            } as Item;
        });
    }

}
