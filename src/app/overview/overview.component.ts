import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  template: `
    <div class="bio">
      <img class="bio-image" src="https://storage-download.googleapis.com/personal-website-156005.appspot.com/bio_pic.jpg">
      <div bio-content>
        <h1> Hello! </h1>
        <h3> My name is Kevin Lutzer and I am an Electrical Engineer! I love solving problems, making things, and programming computers. Reach out and start a conversation! </h3>
      </div>
      <button md-button>Résumé</button>
    </div>
  `,
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }

}
