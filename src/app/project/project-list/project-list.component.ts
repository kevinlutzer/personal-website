import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

@Component({
    selector: 'project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss']
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
