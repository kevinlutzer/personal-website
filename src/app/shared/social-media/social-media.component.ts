import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'kl-social-media',
  template: `
    <ng-container *ngIf="!isBlack">  
      <a mdTooltip="contact me" class="social-icon" href="mailto:kevinlutzer9@gmail.com"><md-icon [svgIcon]="envelope-white"></md-icon></a>
      <a mdTooltip="github" class="social-icon" href="http://github.com/kml183"><md-icon svgIcon="github-white"></md-icon></a>
      <a mdTooltip="linkedin" class="social-icon" href="https://ca.linkedin.com/in/kevin-lutzer-299112103"><md-icon svgIcon="linkedin-white"></md-icon></a>
      <a mdTooltip="résumé" class="social-icon" (click)="onResumeButtonClick()"><md-icon svgIcon="text-file-white"></md-icon></a>
    </ng-container>
  `
})
export class SocialMediaComponent implements OnInit {

  @Input() isBlack = false;

  constructor(
    private sanitizer: DomSanitizer,
    private registry: MdIconRegistry
  ) { }

  onResumeButtonClick() {
    window.open('https://storage-download.googleapis.com/personal-website-156005.appspot.com/docs/kevinlutzer_resume.pdf');
  }

  ngOnInit() {
    this.registry.addSvgIcon('text-file-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/text-file-white.svg'));
    this.registry.addSvgIcon('github-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/github-white.svg'));
    this.registry.addSvgIcon('linkedin-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/linkedin-white.svg'));
    this.registry.addSvgIcon('envelope-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/envelope-white.svg'));

    this.registry.addSvgIcon('text-file-black', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/github-black.svg'));
    this.registry.addSvgIcon('github-black', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/github-black.svg'));
    this.registry.addSvgIcon('linkedin-black', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/linkedin-black.svg'));
    this.registry.addSvgIcon('envelope-black', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/envelope-black.svg'));
  }

}
