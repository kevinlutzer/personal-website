import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { Activity } from './activity.model';
import { displayDifferenceDateString } from 'src/app/utils';
export type SeeMoreButtonText = 'See More!' | 'Hide';

@Component({
  selector: 'activity-summary',
  templateUrl: './activity-summary.component.html',
  styleUrls: [
    './activity-summary.component.scss'
  ]
})

export class ActivitySummaryComponent {

  @Input() activity: Activity;
  @Input() shimmer: boolean;

  contentButtonText: SeeMoreButtonText = 'See More!';
  showContent = false;
  height = '700px;';

  constructor(
    private sanitizer: DomSanitizer,
    private registry: MatIconRegistry
  ) { }

  public navigateToActionLink(): void {
    window.open(this.activity.activityUrl);
  }

  public onShowContent() {
    this.contentButtonText = this.contentButtonText === 'See More!' ? 'Hide' : 'See More!';
    this.showContent = !this.showContent;
  }

  public cardDate(): string {
    let finish: Date;
    if (this.activity.dateFinish) {
      finish = this.activity.dateFinish.toDate();
    }

    let start: Date;
    if (this.activity.dateStart) {
      start = this.activity.dateStart.toDate();
    }

    return displayDifferenceDateString(start, finish);
  }
}
