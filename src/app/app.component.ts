import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProjectService, Project } from './project';
@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
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
