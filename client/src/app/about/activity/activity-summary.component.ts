import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { Activity } from './activity.model';
export type SeeMoreButtonText = 'See More!' | 'Hide';

@Component({
  selector: 'activity-summary',
  templateUrl: './activity-summary.component.html',
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
    private registry: MatIconRegistry
  ) { }

  public navigateToActionLink(): void {
    window.open(this.activity.activityUrl);
  }

  public onShowContent() {
    this.contentButtonText = this.contentButtonText === 'See More!' ? 'Hide' : 'See More!';
    this.showContent = !this.showContent;
  }

  public cardDateString(): string {
    const start: Date = this.activity.dateStart.toDate();

    let finish: Date;
    if (this.activity.dateFinish) {
      finish = this.activity.dateFinish.toDate();
    }

    let result = '';
    if ( start && finish ) {
      result = '( ' + this.displayDate(start) + ' - ' + this.displayDate(finish) + '  )';
    } else if ( this.activity.dateStart ) {
      result = '( ' + this.displayDate(start) + ' - Present )';
    }
    return result;
  }

  private displayDate(d: Date): string {
    return d.getMonth() + '/' + d.getFullYear();
  }
}
