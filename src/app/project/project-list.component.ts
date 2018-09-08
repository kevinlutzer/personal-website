import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from './shared/project.model';
import { ProjectService } from './shared/project.service';

// <div  *ngIf="projects$ | async as projects; else loader">
// <div *ngFor="let project of projects">
//     <div fxFlex="25%">
//         <project-details *ngFor="let project of projects" [project]="project"></project-details>
//     </div>
// </div>
// </div>

@Component({
    selector: 'project-list',
    template: `
        <div class="display-container" *ngIf="projects$ | async as projects; else loader" 
        style="cursor: pointer;">
            <div 
                fxFlexFill
                fxLayout="row wrap"
                fxLayout.xs="column"
                fxLayoutAlign="space-around center"
                fxLayoutGap="grid" 
                >
                <ng-container *ngFor="let project of projects">
                    <div class="project-details-container" fxFlex="45">
                        <div class="one">
                            <project-details [project]="project"></project-details>
                        </div>
                    </div>
                </ng-container>
            </div>
            <ng-template #loader>
                <div class="loader">
                    <mat-spinner></mat-spinner>
                </div>
            </ng-template>
        </div>
    `
})

// styles: [`
//     .project-details-container {
//         max-height: 16px;
//     }
// `]

export class ProjectListComponent implements OnInit {

    public projects$: Observable<Project[]>;

    constructor(private projectsService: ProjectService) {}

    ngOnInit() {
        this.projects$ = this.projectsService.list();
    }
}
