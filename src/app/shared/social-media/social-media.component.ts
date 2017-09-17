import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'kl-social-media',
  template: `
    <a mdTooltip="contact me" class="social-icon" href="mailto:kevinlutzer9@gmail.com"><md-icon svgIcon="envelope"></md-icon></a>
    <a mdTooltip="github" class="social-icon" href="http://github.com/kml183"><md-icon svgIcon="github"></md-icon></a>
    <a mdTooltip="linkedin" class="social-icon" href="https://ca.linkedin.com/in/kevin-lutzer-299112103"><md-icon svgIcon="linkedin"></md-icon></a>
    <a mdTooltip="résumé" class="social-icon" (click)="onResumeButtonClick()"><md-icon svgIcon="text-file"></md-icon></a>

  `
})
export class SocialMediaComponent implements OnInit {

  constructor(
    private sanitizer: DomSanitizer,
    private registry: MdIconRegistry
  ) { }

  onResumeButtonClick() {
    window.open('https://storage-download.googleapis.com/personal-website-156005.appspot.com/docs/kevinlutzer_resume.pdf');
  }

  ngOnInit() {
    this.registry.addSvgIcon('text-file', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/text-file.svg'));
    this.registry.addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/github.svg'));
    this.registry.addSvgIcon('linkedin', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/linkedin.svg'));
    this.registry.addSvgIcon('envelope', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/envelope.svg'));
  }

}
