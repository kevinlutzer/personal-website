import { Component, Input } from '@angular/core';
import { Project } from '../shared/project.model';
import { displayDifferenceDateString } from 'src/app/utils';

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {

  @Input() project: Project | undefined;
  @Input() shimmer = true;

  constructor() {}

  public navigateToSeeMore(): void {
    window.open(this.project?.githubUrl, '_blank');
  }

  public cardDate(): string {
    if (!this.project) {
      return ''
    }
    
    let finish: Date | undefined;
    if (this.project.endDate && this.project.endDate) {
      finish = this.project.endDate;
    }

    return displayDifferenceDateString(this.project.startDate, finish);
  }
}
