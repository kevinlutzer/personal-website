import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ParticlesModule } from 'angular-particle';

import {
  MatDialogModule,
  MatSnackBarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatGridListModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSelectModule,
  MatIconRegistry,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { ActivityService, ActivityStubService, ActivityListComponent } from './activity';
import { OverviewComponent } from './overview';
import { ItemListComponent, ItemComponent } from './item';
import { VisitorDialogComponent, VisitorChartComponent, VisitorApiService, VisitorStubService, VisitorService } from './visitor';
import { NavComponent } from './layout';
import { ProjectListComponent, ProjectService, ProjectStubService, ProjectApiService} from './project';
import { AboutMeComponent } from './about-me';
import { AlertService } from './core';
import { SocialMediaComponent } from './shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    ItemComponent,
    ItemListComponent,
    VisitorChartComponent,
    VisitorDialogComponent,
    OverviewComponent,
    NavComponent,
    AboutMeComponent,
    SocialMediaComponent,
    ProjectListComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    ChartsModule,
    ParticlesModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [
    VisitorService,
    ProjectService,
    ActivityService,
    AlertService,
    ActivityStubService,
    MatIconRegistry,
    {provide: ProjectApiService, useClass: environment.production ? ProjectApiService : ProjectStubService},
    {provide: VisitorApiService, useClass: environment.production ? VisitorApiService : VisitorStubService }
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    VisitorDialogComponent
  ]
})
export class AppModule { }
