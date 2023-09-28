import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styles: [`
    .sidenav-container {
      height: 100%;
    }

    .hidden {
      display: none;
    }

    .sidenav {
      width: 200px;
      box-shadow: 3px 0 6px rgba(0,0,0,.24);
    }

    .nav-page-list-container {
      display: flex;
      align-items: center;
    }

    .nav-page-links-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `]
})
export class MainNavComponent {
  isHandset: Observable<BreakpointState>;
  constructor(
    breakpointObserver: BreakpointObserver
    ) {
      this.isHandset = breakpointObserver.observe(Breakpoints.Handset);
    }
}
