import { Component, OnInit } from '@angular/core';

import { Project, ProjectService, Visitor, VisitorService, Activity, ActivityService } from '../core';
import { Observable } from 'rxjs';

import { Item } from '../core';
@Component({
    selector: 'app-home-page',
    styleUrls: ['home-page.component.scss'],
    templateUrl: 'home-page.component.html'
})

export class HomePageComponent implements OnInit {

    projectItems: Observable<Item[]>;
    visitors: Observable<Visitor[]>;
    activities: Observable<Activity[]>;

    testItems: any;

    constructor(
        private projectService: ProjectService,
        private visitorService: VisitorService,
        private activityService: ActivityService
    ) {}

    ngOnInit() {

        this.testItems = [{
            title: 'Project 1',
            subTitle: 'This is a good project',
            startDate: 'Sept 2017',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            imageUrl: 'http://storage-download.googleapis.com/personal-website-156005.appspot.com/business_card_256x256.jpg',
            iconUrl: 'https://pbs.twimg.com/profile_images/378800000511535745/ce396db06a7f5c7ff03fb49aa1e42705_400x400.png',
            actionUrl: 'https://github.com/kml183/business-card',
            tags: ['electronics', 'embedded systems', 'electronics', 'embedded systems', 'electronics', 'embedded systems'],
        } as Item ];

        this.projectItems = this.projectService
            .list()
            .map((projects) => this.mapProjectsToItems(projects));

        this.visitors = this.visitorService.list();
        this.activities = this.activityService.list();

        this.projectItems.subscribe((prj) => console.log(prj));
        this.visitors.subscribe((visitor) => console.log(visitor));
        this.activities.subscribe((activity) => console.log(activity));
    }

    mapProjectsToItems( projects: Project[]): Item[] {
        return projects.map( project => {
            return {
                title: project.name,
                subTitle: project.tagline,
                description: project.description,
                tags: project.tags,
                actionUrl: project.githubUrl,
                imageUrl: project.imageUrl
            } as Item;
        });
    }
}
