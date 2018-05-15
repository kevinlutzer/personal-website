import { Component, OnInit } from '@angular/core';
import { ActivityService, Activity } from '../activity';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [`.software-icon {padding: 8px;}`]
})
export class AboutComponent implements OnInit {

  activities$: Observable<Activity[]>;

  constructor(
    private activityService: ActivityService
  ) {}

  ngOnInit() {
    this.activities$ = this.activityService.list();
  }
}
