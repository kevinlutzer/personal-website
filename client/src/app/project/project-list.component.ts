import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';

import { Project } from './shared/project.model';
import { ProjectService } from './shared/project.service';
import { map } from 'rxjs/operators';

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
                        <project-summary [shimmer]="!context.isLoading" [project]="project"></project-summary>
                    </div>
                </ng-container>
            </div>
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

    // public projects$: Observable<Project[]>;
    public context$: Observable<{
        projects: Project[],
        isLoading: boolean
    }>;

    constructor(private projectsService: ProjectService) {}

    ngOnInit() {
        this.context$ = combineLatest(
            this.projectsService.projects$,
            this.projectsService.isLoading$
          ).pipe(
            map(([p, l]) => {return {
              projects: p,
              isLoading: l
            };
          }));
    }
}
