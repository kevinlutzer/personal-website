import { Component, OnInit, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatIconRegistry } from '@angular/material';
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
  `]
})
export class MainNavComponent implements OnInit {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(
    private breakpointObserver: BreakpointObserver,
    private registry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    ) {}

    ngOnInit(): void {
      this.registry.addSvgIcon('text-file-black', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/text-file-black.svg'));
      this.registry.addSvgIcon('github-black', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github-black.svg'));
      this.registry.addSvgIcon('linkedin-black', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin-black.svg'));
      this.registry.addSvgIcon('envelope-black', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/envelope-black.svg'));
      this.registry.addSvgIcon('text-file-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/text-file-white.svg'));
      this.registry.addSvgIcon('github-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github-white.svg'));
      this.registry.addSvgIcon('linkedin-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin-white.svg'));
      this.registry.addSvgIcon('envelope-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/envelope-white.svg'));
    }

    onOpenResume(): void {
      window.open('/assets/docs/kevin_lutzer_resume.pdf');    
    }
}
