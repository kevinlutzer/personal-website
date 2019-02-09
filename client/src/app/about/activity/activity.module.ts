import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatSelectModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

import { SharedModule } from '../../shared/shared.module';

import { ActivitySummaryComponent } from './activity-summary.component';
import { ActivityService } from './activity.service';

@NgModule({
  declarations: [
    ActivitySummaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [
    ActivityService
  ],
  exports: [
    ActivitySummaryComponent
  ]
})
export class ActivityModule { }
