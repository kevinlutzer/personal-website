import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
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

import { ChartsModule } from 'ng2-charts';
import { ParticlesModule } from 'angular-particle';

import { ActivityService, ActivityApiService, ActivityStubService, ActivityDetailsComponent } from './activity';
import { OverviewComponent } from './overview';
import { VisitorDialogComponent, VisitorChartComponent, VisitorApiService, VisitorStubService, VisitorService } from './visitor';
import { NavComponent } from './layout';
import { AboutComponent } from './about';
import { AlertService } from './core';
import { SocialMediaComponent } from './shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ActivityDetailsComponent,
    VisitorChartComponent,
    VisitorDialogComponent,
    OverviewComponent,
    NavComponent,
    AboutComponent,
    SocialMediaComponent,
  ],
  imports: [
    FlexLayoutModule,
    AppRoutingModule,
    CommonModule,
    ChartsModule,
    ParticlesModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    MatInputModule,
    MatGridListModule
  ],
  providers: [
    VisitorService,
    ActivityService,
    AlertService,
    MatIconRegistry,
    {provide: ActivityApiService, useClass: false ? ActivityApiService : ActivityStubService},
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
