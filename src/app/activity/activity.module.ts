import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
  MatCardModule
} from '@angular/material';

import { SharedModule } from '../shared/shared.module';

import { ActivityService } from './core/activity.service';
import { ActivityApiService } from './core/activity.api.service';
import { ActivityStubService } from './core/activity.stub.service';
import { ActivityDetailsComponent } from './details/activity-details.component';


@NgModule({
  declarations: [
    ActivityDetailsComponent
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
    ActivityService,
    {provide: ActivityApiService, useClass: false ? ActivityApiService : ActivityStubService},
  ],
  exports: [
    ActivityDetailsComponent
  ]
})
export class ActivityModule { }
