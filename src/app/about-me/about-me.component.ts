import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'

import { ActivityService, Activity } from '../activity';
import { Item } from '../item';

@Component({
  selector: 'app-about',
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent implements OnInit {

  items: Observable<Item[]>;

  constructor(
    private activityService: ActivityService
  ) { }

  ngOnInit() {
    this.items = this.activityService
      .list()
      .map(activities => this.getDisplayItems(activities));

    this.items.subscribe(item => console.log(item));
  }

  private getDisplayItems(activities: Activity[]): Item[] {
    return activities.map(activity => {
        return {
          title: activity.name,
          subTitle: activity.location,
          description: activity.description,
          content: activity.content,
          startDate: activity.dateStart,
          endDate: activity.dateFinish,
          imageUrl: activity.activityImgUrl
        };
    });
}
}
