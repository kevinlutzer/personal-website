import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProjectService, Project } from './project';
@Component({
  selector: 'app-root',
  template: `
    <project-card [project]="project"></project-card>
  `,
})
export class AppComponent {
  constructor( private projectService: ProjectService) {}

  project: Project;

  ngOnInit(): void {
    this.projectService.list().subscribe((projects) => {
      this.project = projects[0];
    });
  }
}
