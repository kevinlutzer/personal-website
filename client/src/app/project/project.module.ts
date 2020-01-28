import { NgModule } from '@angular/core';
import { MatChipsModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProjectListComponent } from './project-list.component';
import { ProjectService } from './shared/project.service';
import { ProjectDetailsComponent } from './project-details/project-details.component';

import { ProjectRoutingModule } from './project-routing.module';

import { SharedModule as ProjectSharedModule } from '../shared';
import { CoreModule as ProjectCoreModule } from '../core';

import { ProjectSampleComponent } from './project-sample/project-sample.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailsComponent,
    ProjectSampleComponent
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
  ],
  exports: [
    ProjectListComponent,
    ProjectDetailsComponent
  ]
})
export class ProjectModule { }
