import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [`.software-icon {padding: 8px;}`]
})
export class AboutComponent implements OnInit {

  context$: Observable<{
    //activities: Activity[],
    isLoading: boolean;
  }>;

  // constructor(
  //   private activityService: ActivityService,
  // ) {}

  ngOnInit() {
    // this.context$ = combineLatest(
    //   this.activityService.activities$,
    //   this.activityService.isLoading$
    // ).pipe(
    //   map(([a, l]) => {return {
    //     activities: a,
    //     isLoading: l
    //   };
    // }));
  }
}
