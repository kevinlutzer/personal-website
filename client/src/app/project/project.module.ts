import { NgModule } from '@angular/core';
import { MatChipsModule, MatButtonModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectListComponent } from './list/project-list.component';
import { ProjectService } from './shared/project.service';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectRoutingModule } from './project-routing.module';
import { SharedModule as ProjectSharedModule } from '../shared';
import { CoreModule as ProjectCoreModule } from '../core';
import { ProjectSampleComponent } from './sample/project-sample.component';
import { DeviceTelemetryTable } from './sample/device-telemetry-table/device-telemetry-table.component' 
import { DeviceStatusCard } from './sample/device-status-card/device-status-card.component';
import { StatusService, TelemetryService } from './sample/room-environment-monitor';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    ProjectSampleComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    DeviceTelemetryTable,
    DeviceStatusCard
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
    TelemetryService,
    ProjectService,
    {provide: 'IOT-DEVICE-GCF-HOST', useValue: environment.iotDeviceHost}
  ],
})
export class ProjectModule { }
