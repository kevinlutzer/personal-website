import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

const resumeUrl = 'https://storage-download.googleapis.com/personal-website-docs-klutzer/kevinlutzer_resume.pdf';
@Component({
  selector: 'kl-social-media',
  template: `
    <div class="social-media-container">
      <a mdTooltip="contact me" class="social-icon" href="mailto:kevinlutzer9@gmail.com"><md-icon svgIcon="envelope-white"></md-icon></a>
      <a mdTooltip="github" class="social-icon" href="http://github.com/kml183"><md-icon svgIcon="github-white"></md-icon></a>
      <a mdTooltip="linkedin" class="social-icon" href="https://ca.linkedin.com/in/kevin-lutzer-299112103"><md-icon svgIcon="linkedin-white"></md-icon></a>
      <a mdTooltip="résumé" class="social-icon" (click)="onResumeButtonClick()"><md-icon svgIcon="text-file-white"></md-icon></a>
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
