import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectCardComponent } from './project-card';
import { ProjectListComponent } from './project-list';

import { ActivityListComponent } from './activity-list';

const routes: Routes = [
  { path: '', component: ProjectListComponent },
  { path: 'project-list', component: ProjectListComponent },
  { path: 'activity-list', component: ActivityListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
