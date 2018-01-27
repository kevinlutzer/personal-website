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

import { VisitorDialogComponent } from './visitor-dialog/visitor-dialog.component';
import { VisitorChartComponent } from './visitor-chart/visitor-chart.component';
import { VisitorApiService } from './shared/visitor.api.service';
import { VisitorStubService } from './shared/visitor.stub.service';
import { VisitorService } from './shared/visitor.service';

import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    VisitorChartComponent,
    VisitorDialogComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    ChartsModule,
    ParticlesModule,
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
    MatIconRegistry,
    {provide: VisitorApiService, useClass: environment.production ? VisitorApiService : VisitorStubService }
  ],
  entryComponents: [
    VisitorDialogComponent
    ],
  exports: [
    VisitorChartComponent,
    VisitorDialogComponent
    ]
})
export class VisitorModule { }
