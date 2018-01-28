import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
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
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
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
