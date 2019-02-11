import { Component, Input, OnInit } from '@angular/core';
import { Project } from './shared/project.model';

@Component({
  selector: 'project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.scss']
})
export class ProjectSummaryComponent {

  @Input() project: Project;
  @Input() shimmer: boolean;

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
