import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdChipsModule, MdButtonModule, MdIconModule, MdGridListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ActivityCardComponent } from './activity-card';
import { ActivityListComponent } from './activity-list';

import { ProjectCardComponent } from './project-card';
import { ProjectListComponent } from './project-list';

import { ProjectService, ProjectApiService, ProjectApiStubService } from './project';
import { VisitorService, VisitorApiService, VisitorApiStubService } from './visitor';
import { ActivityService, ActivityApiService, ActivityStubService } from './activity'


import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    ProjectListComponent,
    ActivityCardComponent,
    ActivityListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdChipsModule,
    MdGridListModule
  ],
  providers: [
    VisitorService,
    ProjectService,
    ActivityService,
    {provide: VisitorApiService, useClass: VisitorApiStubService},
    {provide: ProjectApiService, useClass: ProjectApiStubService},
    {provide: ActivityApiService, useClass: ActivityStubService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
