import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { ParticlesModule } from 'angular-particle';

import {
  MdDialogModule,
  MdSnackBarModule,
  MdIconModule,
  MdButtonModule,
  MdCardModule,
  MdChipsModule,
  MdGridListModule,
  MdToolbarModule,
  MdTooltipModule,
  MdSelectModule,
  MdIconRegistry
} from '@angular/material';

import { ActivityApiService, ActivityService, ActivityStubService } from './activity';
import { OverviewComponent } from './overview';
import { ItemListComponent, ItemComponent } from './item';
import { VisitorDialogComponent, VisitorChartComponent, VisitorApiService, VisitorApiStubService, VisitorService } from './visitor';
import { NavComponent, FooterComponent } from './layout';
import { ProjectsComponent, ProjectApiService, ProjectService, ProjectApiStubService } from './project';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me';
import { ContactMeComponent, ContactFormComponent } from './contact';
import { SocialMediaComponent } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemListComponent,
    VisitorChartComponent,
    VisitorDialogComponent,
    OverviewComponent,
    NavComponent,
    AboutMeComponent,
    SocialMediaComponent,
    FooterComponent,
    ProjectsComponent,
    ContactMeComponent,
    ContactFormComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    ChartsModule,
    ParticlesModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MdDialogModule,
    MdSnackBarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdChipsModule,
    MdGridListModule,
    MdToolbarModule,
    MdTooltipModule,
    MdSelectModule
  ],
  providers: [
    VisitorService,
    ProjectService,
    ActivityService,
    {provide: VisitorApiService, useClass: VisitorApiStubService},
    {provide: ProjectApiService, useClass: ProjectApiStubService},
    {provide: ActivityApiService, useClass: ActivityStubService},
    MdIconRegistry
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    VisitorDialogComponent
  ]
})
export class AppModule { }
