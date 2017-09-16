import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-body">
      <kl-nav></kl-nav>
      <router-outlet></router-outlet>
      <particles [style]="myStyle" [width]="width" [height]="height" [params]="myParams"></particles>
    </div>
  `,
})
export class AppComponent {

  width = 100;
  height = 15;
  myStyle: object = {
    'position': 'fixed',
    'width': '100%',
    'height': '300%',
    'z-index': 1,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
  };
  myParams = {
    particles: {
        number: {
            value: 200,
        },
        color: {
            value: '#ff0000'
        },
        shape: {
            type: 'triangle',
        },
    }
  };

}
