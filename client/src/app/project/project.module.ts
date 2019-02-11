import { NgModule } from '@angular/core';
import { MatChipsModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProjectListComponent } from './project-list.component';
import { ProjectService } from './shared/project.service';
import { ProjectApiService } from './shared/project.api.service';
import { ProjectSummaryComponent } from './project-summary.component';

import { ProjectRoutingModule } from './project-routing.module';

import { SharedModule as ProjectSharedModule } from '../shared';
import { CoreModule as ProjectCoreModule } from '../core';
import { ProjectStubService } from './shared/project.stub.service';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectSummaryComponent
  ],
  imports: [
    ProjectSharedModule,
    ProjectCoreModule,
    MatChipsModule,
    MatButtonModule,
    ProjectRoutingModule,
    FlexLayoutModule
  ],
  providers: [
    ProjectService,
    {provide: ProjectApiService, useClass: ProjectStubService}
  ],
  exports: [
    ProjectListComponent,
    ProjectSummaryComponent
  ]
})
export class ProjectModule { }
