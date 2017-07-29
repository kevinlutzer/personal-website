import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {ProjectService, ProjectApiService, ProjectApiStubService, Project} from './project';
import {VisitorService, VisitorApiService, VisitorApiStubService, Visitor} from './visitor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
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
