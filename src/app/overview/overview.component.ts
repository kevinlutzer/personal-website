import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';

import { VisitorDialogComponent } from './../visitor';

@Component({
  selector: 'app-overview',
  template: `
    <div class="display-container">
      <img class="display-content bio-img" src="https://storage-download.googleapis.com/personal-website-156005.appspot.com/bio_pic.jpg">
      <div class="display-content">
        <h1> Hello! </h1>
        <p> My name is Kevin Lutzer and I am an Electrical Engineer! I love solving problems, making things, and programming computers. Reach out and start a conversation! </p>
      </div>
    </div>
    <div class="display-container">
      <div class="display-content">
        <h1> What Do I Do? </h1>
        <p> Currently I work at a software company called <a href="http://vendasta.com">Vendasta</a> located in Saskatoon Sasktechwan. I work in the R & D department doing frontend and backend development.</p>
      </div>
      <md-card class="survey-call-to-action display-content" (click)="onStartSurveyClick()">
        <md-card-header>
          <md-icon md-card-avatar>code</md-icon>
          <md-card-title>Now that you know a little bit about me, can you tell me something about yourself?</md-card-title>
          <md-card-subtitle>Don't worry, your identification is not being tracked or saved!</md-card-subtitle>
        </md-card-header>
      </md-card>
    </div>
  `
})
export class OverviewComponent implements OnInit {

  constructor(
    public mdDialog: MdDialog
  ) {}

  public onStartSurveyClick(): void {
    console.log('hello world');
    this.mdDialog.open(
      VisitorDialogComponent,
      {width: '256px'}
    );
  }

  ngOnInit() {

  }

}
