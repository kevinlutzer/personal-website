import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';

export const routes: Routes = [
  {path: '', component: ProjectListComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProjectRoutingModule {}
