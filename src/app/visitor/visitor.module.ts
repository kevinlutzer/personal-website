import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatSelectModule,
  MatOptionModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';


import { ChartsModule } from 'ng2-charts';

import { VisitorDialogComponent } from './visitor-dialog.component';
import { VisitorChartComponent } from './visitor-chart.component';
import { VisitorTableComponent } from './visitor-table.component';
import { VisitorApiService } from './core/visitor.api.service';
import { VisitorService } from './core/visitor.service';

import { CoreModule as ProjectCoreModule } from '../core';
import { SharedModule as ProjectSharedModule } from '../shared';

import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    VisitorChartComponent,
    VisitorDialogComponent,
    VisitorTableComponent
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
    VisitorDialogComponent,
    VisitorTableComponent
    ]
})
export class VisitorModule { }
