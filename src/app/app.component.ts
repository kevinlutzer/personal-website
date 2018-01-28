import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  navigateToUrl(url: string): void {
    this.router.navigateByUrl(url);
    this.isActiveTab(url);
  }

  isActiveTab(url: string): boolean {
    console.log(this.route.snapshot);
    return false;
  }
}
