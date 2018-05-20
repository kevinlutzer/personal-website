import { NgModule } from '@angular/core';
import { MatChipsModule, MatButtonModule } from '@angular/material';

import { ProjectListComponent } from './project-list.component';
import { ProjectService } from './shared/project.service';
import { ProjectApiService } from './shared/project.api.service';
import { ProjectDetailsComponent } from './project-details/project-details.component';

import { ProjectRoutingModule } from './project-routing.module';

import { SharedModule as ProjectSharedModule } from '../shared';
import { CoreModule as ProjectCoreModule } from '../core';
import { ProjectStubService } from './shared/project.stub.service';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailsComponent
  ],
  imports: [
    ProjectSharedModule,
    ProjectCoreModule,
    MatChipsModule,
    MatButtonModule,
    ProjectRoutingModule
  ],
  providers: [
    ProjectService,
    {provide: ProjectApiService, useClass: ProjectStubService}
  ],
  exports: [
    ProjectListComponent,
    ProjectDetailsComponent
  ]
})
export class ProjectModule { }
