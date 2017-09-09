import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  template: `
    <h2> Overview </h2>
    <div class="bio">
      <!--<div class="content">
        <h1> Hello! </h1>
        <p> My name is Kevin Lutzer and I am an Electrical Engineer! I love solving problems, making things, and programming computers. Reach out and start a conversation! </p>
      </div>
      <div class="content">
        <h1> Hello! </h1>
        <p> My name is Kevin Lutzer and I am an Electrical Engineer! I love solving problems, making things, and programming computers. Reach out and start a conversation! </p>
      </div> -->
    </div>
  `
})
export class OverviewComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }

}
