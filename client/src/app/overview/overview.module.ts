import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatSnackBarModule,
  MatChipsModule,
  MatGridListModule,
  MatSelectModule,
  MatInputModule,
} from '@angular/material';

import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { SharedModule as ProjectSharedModule } from '../shared/shared.module';
import { VisitorModule } from './visitor';
import { AlertService } from '../core';
import { ActivityModule } from './activity';

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    ActivityModule,
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
  providers: [
    AlertService
  ]
})
export class OverviewModule { }
