import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview';
import { AboutComponent } from './about';

export const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent, data: {name: 'Overview'} },
  { path: 'about', component: AboutComponent, data: {name: 'About'} }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
