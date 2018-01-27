import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
} from '@angular/material';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from './shared/project.service';
import { ProjectStubService } from './shared/project.stub.service';
import { ProjectApiService } from './shared/project.api.service'; 
import { ProjectDetailsComponent } from './project-details/project-details.component';

import { environment } from '../../environments/environment';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailsComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
    ProjectRoutingModule
  ],
  providers: [
    ProjectService,
    {provide: ProjectApiService, useClass: false ? ProjectApiService : ProjectStubService}
  ],
  exports: [
    ProjectListComponent,
    ProjectDetailsComponent
  ]
})
export class ProjectModule { }
