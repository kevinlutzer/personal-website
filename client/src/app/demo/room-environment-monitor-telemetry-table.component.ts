import { Component } from '@angular/core';
import { RoomEnvironmentMonitorTelemetryService } from './room-environment-monitor.service';

@Component({
  selector: 'room-environment-monitor-telemetry-table',
  template: ``,
})
export class RoomEnvironmentMonitorTelemetryTableComponent {
    constructor(
        private roomEnvironmentMonitorTelemetryService: RoomEnvironmentMonitorTelemetryService
    ) {
        this.roomEnvironmentMonitorTelemetryService.cursor = 0;
        this.roomEnvironmentMonitorTelemetryService.pageSize = 0;
        console.log("HELLO WORLD");
    }
}
