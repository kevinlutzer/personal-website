import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

const pageUrls = ['overview', 'projects', 'portfolio', 'about'];

export interface PageMap { [pageName: string]: string; }

@Component({
  selector: 'kl-nav',
  template: `
    <md-toolbar collor="primary">
      <nav *ngIf="routes">
        <a
          *ngFor="let route of routes"
          [routerLink]="['/' + route.path]"
          [ngClass]="{'nav-item-active': '/'+route.path === currentRoute}"
          class="nav-item">
          {{ route.data.name ? route.data.name : ''}}
        </a>
      </nav>
      <span class="spacer"></span>
      <kl-social-media></kl-social-media>
    </md-toolbar>
  `
})
export class NavComponent {

  constructor(
    private router: Router
  ) { }

  /* Get routes without Redirects */
  get routes(): Route[] {
    return this.router.config.filter(route => route.component );
  }

  get currentRoute(): string {
    return this.router.url;
  }
}
