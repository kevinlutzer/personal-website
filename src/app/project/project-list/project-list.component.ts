import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

@Component({
    selector: 'project-list',
    template: `
        <div class="display-container project-list-container">
            <div *ngIf="projects$ | async as projects; else loader ">
                <div
                fxLayoutWrap="wrap"
                fxLayoutAlign="space-between"
                fxFlex="100%"
                class="page-body-width">
                    <project-details *ngFor="let project of projects" fxFlex="49%" fxFlex.xs="100%" [project]="project"></project-details>
                </div>
            </div>
            <ng-template #loader>
                <div class="loader">
                    <mat-spinner></mat-spinner>
                </div>
            </ng-template>
        </div>
    `,
    styleUrls: [`
        .project-list-container {
            margin-top: 16px;
        }
    `]
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
