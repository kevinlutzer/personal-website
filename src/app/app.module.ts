import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';

import {
  MdDialogModule,
  MdSnackBarModule,
  MaterialModule,
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
import { ProjectApiService, ProjectService, ProjectApiStubService } from './project';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about';
import { SocialMediaComponent } from './shared';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemListComponent,
    VisitorChartComponent,
    VisitorDialogComponent,
    OverviewComponent,
    NavComponent,
    AboutComponent,
    SocialMediaComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    ChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MdDialogModule,
    MdSnackBarModule,
    MaterialModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
