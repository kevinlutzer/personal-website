import { Component, Input } from '@angular/core';

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

  @Input() activity: Activity = {} as Activity;
  @Input() shimmer: boolean = false;

  contentButtonText: SeeMoreButtonText = 'See More!';
  showContent = false;
  height = '700px;';

  public navigateToActionLink(): void {
    window.open(this.activity.activityUrl);
  }

  public onShowContent() {
    this.contentButtonText = this.contentButtonText === 'See More!' ? 'Hide' : 'See More!';
    this.showContent = !this.showContent;
  }

  public cardDate(): string {
    return displayDifferenceDateString(this.activity.dateStart, <any>(this.activity.dateFinish));
  }

  public getLocation(): string {
    if (this.activity.location) {
      return this.activity.location;
    }

    return <string>this.activity.company;
  }
}
