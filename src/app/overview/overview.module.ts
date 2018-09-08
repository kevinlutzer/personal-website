import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatSnackBarModule,
  MatChipsModule,
  MatGridListModule,
  MatSelectModule,
  MatIconRegistry,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { SharedModule as ProjectSharedModule } from '../shared/shared.module';
import { VisitorModule } from './visitor';

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    // FlexLayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    MatSnackBarModule,
    MatChipsModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    VisitorModule,
    OverviewRoutingModule,
    ProjectSharedModule
  ],
  providers: []
})
export class OverviewModule { }
