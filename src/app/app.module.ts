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
  MatInputModule
} from '@angular/material';

import { ActivityService, ActivityStubService } from './activity';
import { OverviewComponent } from './overview';
import { ItemListComponent, ItemComponent } from './item';
import { VisitorDialogComponent, VisitorChartComponent, VisitorApiService, VisitorStubService, VisitorService } from './visitor';
import { NavComponent, FooterComponent } from './layout';
import { ProjectListComponent, ProjectService, ProjectStubService } from './project';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me';
import { ContactMeComponent, ContactFormComponent, ContactService, ContactStubService, ContactApiService } from './contact';
import { AlertService } from './core';
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
    ProjectListComponent,
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
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
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
    ContactService,
    ContactStubService,
    ProjectStubService,
    ActivityStubService,
    MatIconRegistry,
    {provide: VisitorApiService, useClass: VisitorApiService},
    {provide: ContactApiService, useClass: ContactStubService},

  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    VisitorDialogComponent
  ]
})
export class AppModule { }
