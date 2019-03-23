import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

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
  constructor(
    private registry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.registry.addSvgIcon('text-file-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/text-file-white.svg'));
    this.registry.addSvgIcon('github-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/github-white.svg'));
    this.registry.addSvgIcon('linkedin-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/linkedin-white.svg'));
    this.registry.addSvgIcon('envelope-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/envelope-white.svg'));
  }
}
