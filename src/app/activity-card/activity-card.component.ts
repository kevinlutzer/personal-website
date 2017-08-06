import { Component, Input } from '@angular/core';

import { Activity } from '../activity';

@Component({
  selector: 'activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss']
})
export class ActivityCardComponent {

  @Input() activity: Activity;

}
