import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {} from './common';

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
