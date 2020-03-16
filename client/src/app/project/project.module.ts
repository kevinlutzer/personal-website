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
import { ProjectSampleComponent } from ';
import { DeviceStatusCard, DeviceTelemetryTable } from './sample/room-environment-monitor';
import { DeviceService, TelemetryService } from './sample/room-environment-monitor';
import { NgxMdModule } from 'ngx-md';
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
    NgxMdModule.forRoot(),
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
