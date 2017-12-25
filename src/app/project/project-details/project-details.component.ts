import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { Project } from '../shared/project.model';

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html'
})
export class ProjectDetailsComponent {

  @Input() project: Project;
  height = '900px';

  constructor() {}

  public navigateToSeeMore(): void {
    window.open(this.project.githubUrl);
  }

  get dateString(): string {
    let result = '';
    if ( this.project.endDate && this.project.startDate ) {
      result = '( ' + this.project.startDate + ' - ' + this.project.endDate + '  )';
    } else if ( this.project.startDate ) {
      result = '( ' + this.project.startDate + ' - Present )';
    }
    return result;
  }
}
