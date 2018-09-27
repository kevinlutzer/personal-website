import { Component } from '@angular/core';
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
export class AppComponent {}

// <mat-toolbar
//       fxLayout="row"
//       fxLayoutAlign="space-between center"
//       fxLayoutContainer
//       fxLayoutWrap
//       color="primary">
      // <nav
      // fxLayoutAlign="center"
      // fxLayoutContainer>
      //     <button mat-button routerLink="/overview">Overview</button>
      //     <button mat-button routerLink="/projects">Projects</button>
      //     <button mat-button routerLink="/about">About</button>
      // </nav>
//       <social-media></social-media>
//     </mat-toolbar>