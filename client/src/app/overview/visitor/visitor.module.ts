import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatSelectModule,
  MatOptionModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';


import { ChartsModule } from 'ng2-charts';

import { VisitorDialogComponent } from './visitor-dialog.component';
import { VisitorChartComponent } from './visitor-chart.component';

import { VisitorApiService } from './visitor.api.service';
import { VisitorService } from './visitor.service';

import { CoreModule as ProjectCoreModule } from '../../core';
import { SharedModule as ProjectSharedModule } from '../../shared';

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
    MatTableModule,
    MatPaginatorModule,
    ProjectCoreModule,
    ProjectSharedModule
  ],
  providers: [
    VisitorService,
    VisitorApiService,
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
