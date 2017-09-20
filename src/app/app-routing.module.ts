import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview';
import { AboutMeComponent } from './about-me';
import { ProjectsComponent } from './project';

export const routes: Routes = [
  { path: 'overview', component: OverviewComponent, data: {name: 'Overview'} },
  { path: 'projects', component: ProjectsComponent, data: {name: 'Projects'} },
  { path: 'about-me', component: AboutMeComponent, data: {name: 'About Me'} },
  //{ path: 'contact', component: AboutMeComponent, data: {name: 'Contact'} },
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: '**', redirectTo: '/overview', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
