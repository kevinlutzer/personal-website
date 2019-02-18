import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomEnvironmentMonitorTelemetryTableComponent } from './room-environment-monitor-telemetry-table.component';

export const routes: Routes = [
  { path: 'overview', component: RoomEnvironmentMonitorTelemetryTableComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: '**', redirectTo: '/overview', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class DemoRoutingModule {}
