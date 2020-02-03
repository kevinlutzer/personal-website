import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { Project } from './shared/project.model';
import { ProjectService } from './shared/project.service';

@Component({
    selector: 'project-list',
    templateUrl: './project-list.component.html'
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
