import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './core';
import { environment } from '../environments/environment';

@Component({
  selector: 'kl-root',
  template: `
    <main-nav>
      <div class="website-content">
        <router-outlet></router-outlet>
      </div>
    </main-nav>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private analyticsService: AnalyticsService ) {}

  ngOnInit(): void {
    if (environment.production) {
      this.analyticsService.setup();
    }
  }
}
