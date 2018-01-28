import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(
    private router: Router,
  ) {}

  navigateToUrl(url: string): void {
    this.router.navigateByUrl(url);
  }

}
