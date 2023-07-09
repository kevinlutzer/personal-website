import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
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
