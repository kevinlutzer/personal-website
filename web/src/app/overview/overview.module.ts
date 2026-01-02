import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';  
import { MatInputModule } from '@angular/material/input';

import { OverviewComponent } from './overview.component';
import { SharedModule as ProjectSharedModule } from '../shared/shared.module';
import { VisitorModule } from './visitor';
import { AlertService } from '../core';
import { ActivityModule } from './activity';
import { ProjectModule } from '../project';

@NgModule({ declarations: [
        OverviewComponent
    ], imports: [ActivityModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatChipsModule,
        MatGridListModule,
        MatSelectModule,
        MatInputModule,
        MatGridListModule,
        VisitorModule,
        ProjectSharedModule,
        ProjectModule], providers: [
        AlertService,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class OverviewModule { }
