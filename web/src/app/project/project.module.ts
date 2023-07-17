import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectListComponent } from './list/project-list.component';
import { ProjectService } from './shared/project.service';
import { ProjectDetailsComponent } from './project-details/project-details.component';
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
    ProjectDetailsComponent,
    DeviceTelemetryTable,
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
    ProjectDetailsComponent
  ],
  providers: [
    DeviceService,
    TelemetryService,
    ProjectService,
    {provide: 'IOT-DEVICE-GCF-HOST', useValue: environment.iotDeviceHost}
  ],
})
export class ProjectModule { }
