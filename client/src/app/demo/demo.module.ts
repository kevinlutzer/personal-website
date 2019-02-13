import { NgModule } from '@angular/core';
import { DemoRoutingModule } from './demo-routing.module';
import { RoomEnvironmentMonitorTelemetryComponent } from './room-environment-monitor-telemetry-table.component';

@NgModule({
  imports: [ DemoRoutingModule ],
  declarations: [ RoomEnvironmentMonitorTelemetryComponent ],
  exports: [],
})
export class DemoModule {}
