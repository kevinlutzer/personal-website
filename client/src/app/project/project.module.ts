import { NgModule } from '@angular/core';
import { MatChipsModule, MatButtonModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectListComponent } from './project-list.component';
import { ProjectService } from './shared/project.service';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectRoutingModule } from './project-routing.module';
import { SharedModule as ProjectSharedModule } from '../shared';
import { CoreModule as ProjectCoreModule } from '../core';
import { ProjectSampleComponent } from './project-sample/project-sample.component';
import { StatusService } from './room-environment-monitor';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    ProjectSampleComponent,
    ProjectListComponent,
    ProjectDetailsComponent
  ],
  imports: [
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    ProjectRoutingModule,
    ProjectSharedModule,
    ProjectCoreModule,
    FlexLayoutModule
  ],
  providers: [
    StatusService,
    ProjectService,
    {provide: 'IOT-DEVICE-GCF-HOST', useValue: environment.iotDeviceHost}
  ],
})
export class ProjectModule { }
