import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { Project } from './shared/project.model';
import { ProjectService } from './shared/project.service';

@Component({
    selector: 'project-list',
    template: `
    <div>
        <div *ngIf="context$ | async as context"
        style="cursor: pointer;">
            <div
                fxFlexFill
                fxLayoutAlign="center stretch"
                fxLayout.xs="column"
                fxLayout="row wrap"
                fxLayoutGap="grid"
                >
                <ng-container *ngFor="let project of context.projects">
                    <div class="display-content">
                        <project-details
                        [shimmer]="context.isLoading"
                        [project]="project"></project-details>
                    </div>
                </ng-container>
            </div>
        </div>
    </div>
    `
})

export class ProjectListComponent implements OnInit {

    context$: Observable<{
        projects: Project[],
        isLoading: boolean;
    }>;

    constructor(
        private projectService: ProjectService,
    ) {}

    ngOnInit() {
        this.context$ = combineLatest(
            this.projectService.projects$,
            this.projectService.isLoading$
        ).pipe(
            map(([a, l]) => {
                return {
                    projects: a,
                    isLoading: l
                };
        }));
    }
}
