import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from './shared/project.model';
import { ProjectService } from './shared/project.service';

@Component({
    selector: 'project-list',
    template: `
    <div>
        <div *ngIf="projects$ | async as projects; else loader" 
        style="cursor: pointer;">
            <div 
                fxFlexFill
                fxLayoutAlign="center stretch"
                fxLayout.xs="column"
                fxLayout="row wrap"
                fxLayoutGap="grid" 
                >
                <ng-container *ngFor="let project of projects; let i = index;">
                    <div class="display-content">
                        <project-details [project]="projects[i]"></project-details>
                    </div>
                </ng-container>
            </div>
            <ng-template #loader>
                <div class="loader">
                    <mat-spinner></mat-spinner>
                </div>
            </ng-template>
        </div>
    </div>
    `,
    styles: [
        `
            .project-details-container {
                 max-width: 400px;
                 margin: 16px;
            }
        `
    ]
})

export class ProjectListComponent implements OnInit {

    public projects$: Observable<Project[]>;

    constructor(private projectsService: ProjectService) {}

    ngOnInit() {
        this.projects$ = this.projectsService.list();
    }
}
