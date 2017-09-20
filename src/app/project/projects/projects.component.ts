import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

import { Item } from '../../item';

@Component({
    selector: 'projects',
    template: `
        <item-list [items]="projectItems | async"></item-list>
    `,
})

export class ProjectsComponent implements OnInit {

    private projects: Observable<Project[]>;
    private projectItems: Observable<Item[]>;

    constructor(
        private projectsService: ProjectService
    ) {}

    private getDisplayItems(projects: Project[]): Item[] {
        return projects.map(project => {
            return {
                title: project.name,
                subTitle: project.tagline,
                description: project.description,
                startDate: project.startDate,
                endDate: project.endDate,
                imageUrl: project.imageUrl,
                tags: project.tags
            };
        });
    }

    ngOnInit() {
        this.projects = this.projectsService.list();
        this.projectItems = this.projects.map(projects => this.getDisplayItems(projects));
    }
}
