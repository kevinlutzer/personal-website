import { NgModule } from '@angular/core';
import { RoomEnvironmentMonitorTelemetryApiService } from './room-environment-monitor.api.service';
import { RoomEnvironmentMonitorTelemetryService } from './room-environment-monitor.service';
import { RoomEnvironmentMonitorTelemetryTableComponent } from './room-environment-monitor-telemetry-table.component';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  declarations: [
        RoomEnvironmentMonitorTelemetryTableComponent
  ],
  imports: [
        DemoRoutingModule,
  ],
  providers: [
        RoomEnvironmentMonitorTelemetryApiService,
        RoomEnvironmentMonitorTelemetryService,
        {
            provide: 'ROOM_ENVIRONMENT_MONITOR_HANDLER',
            useValue: 'https://us-central1-iot-klutzer.cloudfunctions.net/RoomEnvironmentTelemetryHandler/'
        },
  ],
})
export class DemoModule { }
