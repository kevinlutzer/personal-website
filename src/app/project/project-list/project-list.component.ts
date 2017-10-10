import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

import { Item } from '../../item';

@Component({
    selector: 'project-list',
    template:
    `
        <div *ngIf="projectItems | async as items; else loader ">
            <item-list [items]="items" [height]="570"></item-list>
        </div>
        <ng-template #loader>
            <div class="loader">
                <md-spinner></md-spinner>
            </div>
        </ng-template>
    `,
})

export class ProjectListComponent implements OnInit {

    public projectItems: Observable<Item[]>;

    constructor(
        private projectsService: ProjectService
    ) {}

    private getDisplayItems(projects: Project[]): Item[] {
        return projects ? projects.map(project => {
            return {
                title: project.name,
                subTitle: project.tagline,
                description: project.description,
                startDate: project.startDate,
                endDate: project.endDate,
                imageUrl: project.imageUrl,
                tags: project.tags,
                actionUrl: project.githubUrl,
                iconUrl: 'assets/images/icons/github-white.svg'
            } as Item;
        }) : null;
    }

    ngOnInit() {
        this.projectItems = this.projectsService
            .list()
            .map(projects => this.getDisplayItems(projects));
    }
}
