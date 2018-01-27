import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview';
import { AboutComponent } from './about';
import { ProjectListComponent } from './project';

export const routes: Routes = [
  { path: 'overview', loadChildren: './overview/overview.module#OverviewModule' },
  { path: 'projects', loadChildren: './project/project.module#ProjectModule'},
  { path: 'about', component: AboutComponent, data: {name: 'About'} },
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: '**', redirectTo: '/overview', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
