import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

const pageUrls = ['overview', 'projects', 'portfolio', 'about'];

export interface PageMap { [pageName: string]: string; }

@Component({
  selector: 'kl-nav',
  templateUrl: 'nav.component.html'
})
export class NavComponent {

  constructor(
    private router: Router
  ) { }

  get currentRoute(): string {
    return this.router.url;
  }

  public getRoutes(): Route[] {
    return this.router.config.filter(route => route.component );
  }

  public routeToPage(url: string) {
    this.router.navigateByUrl(url);
  }
}
