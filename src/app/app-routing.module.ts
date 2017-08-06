import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectCardComponent } from './project-card';
import { ProjectListComponent } from './project-list';

const routes: Routes = [
  { path: '/', component: ProjectListComponent },
  { path: '/project-list', component: ProjectListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
