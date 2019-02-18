import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomEnvironmentMonitorTelemetryTableComponent } from './room-environment-monitor-telemetry-table.component';

export const routes: Routes = [
    {path: '', component: RoomEnvironmentMonitorTelemetryTableComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DemoRoutingModule {}
