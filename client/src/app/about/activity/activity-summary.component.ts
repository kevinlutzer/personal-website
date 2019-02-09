import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { Activity } from './activity.model';
import { ActivityService } from './activity.service';

export type SeeMoreButtonText = 'See More!' | 'Hide';

@Component({
  selector: 'activity-details',
  templateUrl: './activity-details.component.html',
  styles: [
    `
      .mat-card-content {
        min-height: 90px;
      }
    `
  ]
})

export class ActivitySummaryComponent {

  @Input() activity: Activity;

  contentButtonText: SeeMoreButtonText = 'See More!';
  showContent = false;
  height = '700px;';

  constructor(
    private sanitizer: DomSanitizer,
    private registry: MatIconRegistry,
  ) { }

  public navigateToActionLink(): void {
    window.open(this.activity.activityUrl);
  }

  public onShowContent() {
    this.contentButtonText = this.contentButtonText === 'See More!' ? 'Hide' : 'See More!';
    this.showContent = !this.showContent;
  }

  get dateString(): string {
    let result = '';
    if ( this.activity.dateFinish && this.activity.dateStart ) {
      result = '( ' + this.activity.dateStart + ' - ' + this.activity.dateFinish + '  )';
    } else if ( this.activity.dateStart ) {
      result = '( ' + this.activity.dateStart + ' - Present )';
    }
    return result;
  }
}
