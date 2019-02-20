import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';

import { Project } from './shared/project.model';
import { ProjectService } from './shared/project.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'project-list',
    templateUrl: 'project-list.component.html',
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
