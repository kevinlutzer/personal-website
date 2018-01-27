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

import { ActivityService } from './shared/activity.service';
import { ActivityApiService } from './shared/activity.api.service';
import { ActivityStubService } from './shared/activity.stub.service';
import { ActivityDetailsComponent } from './details/activity-details.component';

@NgModule({
  declarations: [
    ActivityDetailsComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
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
    ActivityService,
    MatIconRegistry,
    {provide: ActivityApiService, useClass: false ? ActivityApiService : ActivityStubService},
  ]
})
export class ActivityModule { }
