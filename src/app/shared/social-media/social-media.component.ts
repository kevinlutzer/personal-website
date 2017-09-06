import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'kl-social-media',
  template: `
    <a mdTooltip="contact me" class="social-icon" href=""><md-icon svgIcon="envelope"></md-icon></a>
    <a mdTooltip="github" class="social-icon" href="http://github.com/kml183"><md-icon svgIcon="github"></md-icon></a>
    <a mdTooltip="linkedin" class="social-icon" href=""><md-icon svgIcon="linkedin"></md-icon></a>
  `
})
export class SocialMediaComponent implements OnInit {

  constructor(
    private sanitizer: DomSanitizer,
    private registry: MdIconRegistry
  ) { }

  ngOnInit() {
    this.registry.addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/github.svg'));
    this.registry.addSvgIcon('linkedin', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/linkedin.svg'));
    this.registry.addSvgIcon('envelope', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/envelope.svg'));
  }

}
