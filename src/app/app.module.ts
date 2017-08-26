import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdGridListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCommonModule } from './common';
import {
  VisitorService,
  VisitorApiService,
  VisitorApiStubService,
  ProjectService,
  ProjectApiService,
  ProjectApiStubService,
  ActivityService,
  ActivityApiService,
  ActivityStubService
} from './core';

import { HomePageComponent } from './home-page';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    AppCommonModule,
    AppRoutingModule,
    CommonModule,
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
