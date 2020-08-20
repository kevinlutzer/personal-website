import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


import { ChartsModule } from 'ng2-charts';

import { VisitorDialogComponent } from './visitor-dialog.component';
import { VisitorChartComponent } from './visitor-chart.component';
import { VisitorTableComponent } from './visitor-table.component';
import { VisitorApiService } from './visitor.api.service';
import { VisitorService } from './visitor.service';

import { CoreModule as ProjectCoreModule } from '../../core';
import { SharedModule as ProjectSharedModule } from '../../shared';

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
    MatTableModule,
    MatPaginatorModule,
    ProjectCoreModule,
    ProjectSharedModule
  ],
  providers: [
    VisitorService,
    VisitorApiService,
  ],
  exports: [
      VisitorChartComponent,
      VisitorDialogComponent,
      VisitorTableComponent
    ]
})
export class VisitorModule { }
