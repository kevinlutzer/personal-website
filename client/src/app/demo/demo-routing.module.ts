import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomEnvironmentMonitorTelemetryComponent } from './room-environment-monitor-telemetry-table.component';

export const routes: Routes = [
    {path: '', component: RoomEnvironmentMonitorTelemetryComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class DemoRoutingModule {}
