import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdChipsModule, MdButtonModule, MdIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProjectCardComponent } from './project-card';

import { ProjectService, ProjectApiService, ProjectApiStubService, Project } from './project';
import { VisitorService, VisitorApiService, VisitorApiStubService, Visitor } from './visitor';

import 'hammerjs';
import { ProjectListComponent } from './src/app/project-list/project-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdIconModule,
    MdButtonModule,
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
