import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatSelectModule,
  MatOptionModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';


import { ChartsModule } from 'ng2-charts';

import { VisitorDialogComponent } from './visitor-dialog/visitor-dialog.component';
import { VisitorChartComponent } from './visitor-chart/visitor-chart.component';
import { VisitorApiService } from './core/visitor.api.service';
import { VisitorStubService } from './core/visitor.stub.service';
import { VisitorService } from './core/visitor.service';

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
    MatOptionModule,
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
