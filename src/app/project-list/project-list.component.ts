import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; 

import { ProjectService, Project } from '../project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Observable<Project[]>;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projects = this.projectService.list();
  }

}
