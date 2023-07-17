import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

interface projectListContext {
    projects: Project[],
    isLoading: boolean;
}

@Component({
    selector: 'project-list',
    templateUrl: './project-list.component.html'
})
export class ProjectListComponent {

    context$: Observable<projectListContext>;

    constructor(
        private projectService: ProjectService,
    ) {
      this.context$ = combineLatest(
          this.projectService.projects$,
          this.projectService.isLoading$
      ).pipe(
          map(([a, l]: [Project[], boolean]) => {
              return {
                  projects: a,
                  isLoading: l
              } as projectListContext;
      }));
    }
}
