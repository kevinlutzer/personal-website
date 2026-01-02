import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgChartsModule } from 'ng2-charts';

import { VisitorDialogComponent } from './visitor-dialog.component';
import { VisitorChartComponent } from './visitor-chart/visitor-chart.component';
import { VisitorTableComponent } from './visitor-table.component';
import { VisitorService } from './visitor.service';

import { CoreModule as ProjectCoreModule } from '../../core';
import { SharedModule as ProjectSharedModule } from '../../shared';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [
        VisitorChartComponent,
        VisitorDialogComponent,
        VisitorTableComponent
    ],
    exports: [
        VisitorChartComponent,
        VisitorDialogComponent,
        VisitorTableComponent
    ], imports: [CommonModule,
        NgChartsModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        ProjectCoreModule,
        ProjectSharedModule], providers: [
        VisitorService,
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class VisitorModule { }
