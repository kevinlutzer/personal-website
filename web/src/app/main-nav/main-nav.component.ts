import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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
export class MainNavComponent implements OnInit {
  isHandset: Observable<BreakpointState>;
  constructor(
    private breakpointObserver: BreakpointObserver
    ) {
      this.isHandset = this.breakpointObserver.observe(Breakpoints.Handset);
    }

    ngOnInit(): void {

    }

    onOpenResume(): void {
      window.open('/assets/docs/kevin_lutzer_resume.pdf');    
    }
}
