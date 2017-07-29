import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdChipsModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProjectCardComponent } from './project-card';

import { ProjectService, ProjectApiService, ProjectApiStubService, Project } from './project';
import { VisitorService, VisitorApiService, VisitorApiStubService, Visitor } from './visitor';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdCardModule,
    MdChipsModule
  ],
  providers: [
    VisitorService,
    ProjectService,
    {provide: VisitorApiService, useClass: VisitorApiStubService},
    {provide: ProjectApiService, useClass: ProjectApiStubService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
