import { Component, Input, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'social-media',
  template: `
    <div class="social-media-container">
      <a matTooltip="contact me" class="social-icon" href="mailto:kevinlutzer9@gmail.com"><mat-icon svgIcon="envelope-white"></mat-icon></a>
      <a matTooltip="github" class="social-icon" href="http://github.com/kml183"><mat-icon svgIcon="github-white"></mat-icon></a>
      <a matTooltip="linkedin" class="social-icon" href="https://ca.linkedin.com/in/kevin-lutzer-299112103"><mat-icon svgIcon="linkedin-white"></mat-icon></a>
      <a matTooltip="résumé" class="social-icon" (click)="onResumeButtonClick()"><mat-icon svgIcon="text-file-white"></mat-icon></a>
    </div>
  `,
  styles: [`
  .social-icon {
    margin-left: 16px;
  }

  .social-media-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;}`
  ]
})
export class SocialMediaComponent implements OnInit {

  resumeUrl: string;

  constructor(
    @Inject('GOOGLE_STORAGE_DOCS_DOMAIN') private gcsDomain: string,
    private sanitizer: DomSanitizer,
    private registry: MatIconRegistry
  ) { }

  onResumeButtonClick() {
    window.open(this.resumeUrl);
  }

  ngOnInit() {
    this.resumeUrl = `${this.gcsDomain}/kevinlutzer_resume.pdf`

    this.registry.addSvgIcon('text-file-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/text-file-white.svg'));
    this.registry.addSvgIcon('github-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/github-white.svg'));
    this.registry.addSvgIcon('linkedin-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/linkedin-white.svg'));
    this.registry.addSvgIcon('envelope-white', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/envelope-white.svg'));
  }

}
