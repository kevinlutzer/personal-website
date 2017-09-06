import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `
    <kl-nav></kl-nav>
    <router-outlet></router-outlet>
    <kl-footer></kl-footer>
  `,
})
export class AppComponent {}
