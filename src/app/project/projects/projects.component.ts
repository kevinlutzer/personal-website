import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

@Component({
    selector: 'projects',
    template: `
        hello world
    `,
})

export class ProjectsComponent implements OnInit {

    private projects: Observable<Project[]>;

    constructor(
        private projectsService: ProjectService
    ) {}

    ngOnInit() {
        this.projects = this.projectsService.list();
    }
}
