import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from './shared/project.model';
import { ProjectService } from './shared/project.service';

@Component({
    selector: 'project-list',
    template: 'project-list.component.html',
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

    ngOnInit() { this.projects$ = this.projectsService.list();}
}
