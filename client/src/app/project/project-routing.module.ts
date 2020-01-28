import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectListComponent } from './project-list.component';
import { ProjectSampleComponent } from './project-sample/project-sample.component';
export const routes: Routes = [
  {path: '', component: ProjectListComponent},
  {path: 'sample', component: ProjectSampleComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProjectRoutingModule {}
