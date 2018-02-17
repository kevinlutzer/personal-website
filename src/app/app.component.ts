import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar 
      fxLayout="row"
      fxLayoutAlign="space-between"
      fxLayoutContainer
      color="primary">
      <nav>
          <button mat-button routerLink="/overview">Overview</button>
          <button mat-button routerLink="/projects">Projects</button>
          <button mat-button routerLink="/about">About</button>
      </nav>
      <social-media></social-media>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router,
  ) {}

  navigateToUrl(url: string): void {
    this.router.navigateByUrl(url);
  }

}
