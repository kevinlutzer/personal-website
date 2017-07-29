import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProjectCardComponent } from './project-card';
@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  constructor() {}
}
