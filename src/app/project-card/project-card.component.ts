import { Component, Input } from '@angular/core';

import { Project } from '../project';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  @Input() project: Project;

  private navigateToGithubProject(): void {
    window.open(this.project.githubUrl);
  }
}
