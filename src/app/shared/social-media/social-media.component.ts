import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

const resumeUrl = 'https://storage-download.googleapis.com/personal-website-docs-klutzer/kevinlutzer_resume.pdf';
@Component({
  selector: 'kl-social-media',
  template: `
    <div class="social-media-container">
      <a matTooltip="contact me" class="social-icon" href="mailto:kevinlutzer9@gmail.com"><mat-icon svgIcon="envelope-white"></mat-icon></a>
      <a matTooltip="github" class="social-icon" href="http://github.com/kml183"><mat-icon svgIcon="github-white"></mat-icon></a>
      <a matTooltip="linkedin" class="social-icon" href="https://ca.linkedin.com/in/kevin-lutzer-299112103"><mat-icon svgIcon="linkedin-white"></mat-icon></a>
      <a matTooltip="résumé" class="social-icon" (click)="onResumeButtonClick()"><mat-icon svgIcon="text-file-white"></mat-icon></a>
    </div>
  `
})
export class SocialMediaComponent implements OnInit {

  constructor(
    private sanitizer: DomSanitizer,
    private registry: MatIconRegistry
  ) { }

  onResumeButtonClick() {
    window.open(resumeUrl);
  }

  ngOnInit() {
    this.registry.addSvgIcon('text-file-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/text-file-white.svg'));
    this.registry.addSvgIcon('github-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/github-white.svg'));
    this.registry.addSvgIcon('linkedin-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/linkedin-white.svg'));
    this.registry.addSvgIcon('envelope-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/envelope-white.svg'));
  }

}
