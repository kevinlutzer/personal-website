import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview';
import { AboutComponent } from './about';
import { ProjectsComponent } from './project';

export const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent, data: {name: 'Overview'} },
  { path: 'projects', component: ProjectsComponent, data: {name: 'Projects'} },
  { path: 'about', component: AboutComponent, data: {name: 'About'} }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
