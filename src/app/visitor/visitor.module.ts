import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { ChartsModule } from 'ng2-charts';

import { VisitorDialogComponent } from './visitor-dialog/visitor-dialog.component';
import { VisitorChartComponent } from './visitor-chart/visitor-chart.component';
import { VisitorApiService } from './shared/visitor.api.service';
import { VisitorStubService } from './shared/visitor.stub.service';
import { VisitorService } from './shared/visitor.service';

import { CoreModule as ProjectCoreModule } from '../core';
import { SharedModule as ProjectSharedModule } from '../shared';

@NgModule({
  declarations: [
    VisitorChartComponent,
    VisitorDialogComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,

    ProjectCoreModule,
    ProjectSharedModule
  ],
  providers: [
    VisitorService,
    {provide: VisitorApiService, useClass: VisitorApiService }
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
