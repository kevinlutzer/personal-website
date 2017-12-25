import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

@Component({
    selector: 'project-list',
    template:
    `
        <div *ngIf="projects$ | async as projects; else loader ">
            <div
                class="display-container left-md-card-offset"
                fxLayoutWrap="wrap"
                fxLayoutAlign="space-around"
                fxFlex="100%">
                <div *ngFor="let project of projects" fxFlex="45%">
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
