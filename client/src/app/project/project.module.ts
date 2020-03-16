import { NgModule } from '@angular/core';
import { MatChipsModule, MatButtonModule,
  MatCardModule, MatTableModule, MatPaginatorModule, MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectListComponent } from './list/project-list.component';
import { ProjectService } from './shared/project.service';
import { ProjectDetailsComponent } from './details/project-details.component';
import { ProjectCardComponent } from './card/project-card.component';
import { SharedModule as ProjectSharedModule } from '../shared';
import { CoreModule as ProjectCoreModule } from '../core';
import { ProjectSampleComponent } from './sample/project-sample.component';
import { DeviceTelemetryTable } from './sample/device-telemetry-table/device-telemetry-table.component' 
import { DeviceStatusCard } from './sample/device-status-card/device-status-card.component';
import { DeviceService, TelemetryService } from './sample/room-environment-monitor';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    ProjectSampleComponent,
    ProjectListComponent,
    ProjectCardComponent,
    DeviceTelemetryTable,
    ProjectDetailsComponent,
    DeviceStatusCard
  ],
  imports: [
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    ProjectSharedModule,
    ProjectCoreModule,
    FlexLayoutModule
  ],
  exports: [
    ProjectCardComponent
  ],
  providers: [
    DeviceService,
    TelemetryService,
    ProjectService,
    {provide: 'IOT-DEVICE-GCF-HOST', useValue: environment.iotDeviceHost}
  ],
})
export class ProjectModule { }
