import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview';

export const routes: Routes = [
  { path: 'overview', component: OverviewComponent, data: {name: 'Overview'} },
  { path: 'about', component: OverviewComponent, data: {name: 'About'} }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
