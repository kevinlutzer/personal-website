import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; 

import { ActivityService, Activity } from '../activity';

@Component({
  selector: 'app-project-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities: Observable<Activity[]>;

  constructor(
    private activityService: ActivityService
  ) {}

  ngOnInit() {
    this.activities = this.activityService.list();
  }

}
