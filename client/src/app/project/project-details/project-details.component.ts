import { Component, Input } from '@angular/core';
import { Project } from '../shared/project.model';
import { displayDifferenceDateString } from 'src/app/utils';

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {

  @Input() project: Project;
  @Input() shimmer = true;

  constructor() {}

  public navigateToSeeMore(): void {
    window.open(this.project.githubUrl);
  }

  public cardDate(): string {
    let finish: Date;

    if (!this.project) {
      return ''
    }

    if (this.project.endDate && this.project.endDate.toDate) {
      finish = this.project.endDate.toDate();
    }

    let start: Date;
    if (this.project.startDate && this.project.startDate.toDate) {
      start = this.project.startDate.toDate();
    }

    return displayDifferenceDateString(start, finish);
  }
}
