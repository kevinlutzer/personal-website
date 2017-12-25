import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

@Component({
    selector: 'project-list',
    template:
    `
        <div *ngIf="projects$ | async as projects; else loader ">
            <div class="display-container">
                <div *ngFor="let project of projects" class="display-content">
                    <project-details [project]="project"></project-details>
                </div>
            </div>
        </div>
        <ng-template #loader>
            <div class="loader">
                <mat-spinner></mat-spinner>
            </div>
        </ng-template>
    `,
})

export class ProjectListComponent implements OnInit {

    public projects$: Observable<Project[]>;

    constructor(
        private projectsService: ProjectService
    ) {}

    ngOnInit() {
        this.projects$ = this.projectsService.list();
    }
}
