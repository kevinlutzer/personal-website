import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

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

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    ActivityModule,
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatChipsModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    VisitorModule,
    ProjectSharedModule,
    ProjectModule,
  ],
  providers: [
    AlertService
  ]
})
export class OverviewModule { }
