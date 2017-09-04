import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  MdSelectModule
} from '@angular/material';

import { ActivityApiService, ActivityService, ActivityStubService } from './activity';
import { OverviewComponent } from './overview';
import { ItemListComponent, ItemComponent } from './item';
import { VisitorDialogComponent, VisitorChartComponent, VisitorApiService, VisitorApiStubService, VisitorService } from './visitor';
import { NavComponent } from './layout';
import { ProjectApiService, ProjectService, ProjectApiStubService } from './project';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemListComponent,
    VisitorChartComponent,
    VisitorDialogComponent,
    OverviewComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    ChartsModule,
    MdDialogModule,
    MdSnackBarModule,
    MaterialModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdChipsModule,
    MdGridListModule,
    MdToolbarModule,
    MdSelectModule
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
