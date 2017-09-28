import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview';
import { AboutMeComponent } from './about-me';
import { ProjectListComponent } from './project';
import { ContactMeComponent } from './contact';

export const routes: Routes = [
  { path: 'overview', component: OverviewComponent, data: {name: 'Overview'} },
  { path: 'projects', component: ProjectListComponent, data: {name: 'My Projects'} },
  { path: 'contact-me', component: ContactMeComponent, data: {name: 'Contact Me'} },
  { path: 'about-me', component: AboutMeComponent, data: {name: 'About Me'} },
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: '**', redirectTo: '/overview', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
