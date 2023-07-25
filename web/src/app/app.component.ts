import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
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
export class AppComponent {
  constructor(
    private registry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    this.registry.addSvgIcon('text-file-black', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/text-file-black.svg'));
    this.registry.addSvgIcon('github-black', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github-black.svg'));
    this.registry.addSvgIcon('linkedin-black', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin-black.svg'));
    this.registry.addSvgIcon('envelope-black', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/envelope-black.svg'));
    this.registry.addSvgIcon('text-file-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/text-file-white.svg'));
    this.registry.addSvgIcon('github-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github-white.svg'));
    this.registry.addSvgIcon('linkedin-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin-white.svg'));
    this.registry.addSvgIcon('envelope-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/envelope-white.svg'));
  }
}
