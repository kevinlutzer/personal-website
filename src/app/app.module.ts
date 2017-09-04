import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdGridListModule,
  MdDialogModule,
  MdButtonModule,
  MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import {
  AlertModule,
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

import { OverviewComponent } from './overview';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent
  ],
  imports: [
    AlertModule,
    SharedModule,
    AppRoutingModule,
    CommonModule,
    MdGridListModule,
    MdDialogModule,
    MdSnackBarModule,
    MdToolbarModule
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
