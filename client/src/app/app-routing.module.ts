import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent, RoomEnvironmentMonitorPageComponent, ProjectDetailsComponent } from './project';
import { OverviewComponent } from './overview';
export const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'projects', component: ProjectListComponent},
  { path: 'projects/:id', component: ProjectDetailsComponent},
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: '**', redirectTo: '/overview', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
