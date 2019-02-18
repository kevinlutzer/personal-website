import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'overview', loadChildren: './overview/overview.module#OverviewModule' },
  { path: 'projects', loadChildren: './project/project.module#ProjectModule'},
  { path: 'about', loadChildren: './about/about.module#AboutModule'},
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule'},
  { path: '', redirectTo: '/demo', pathMatch: 'full' },
  { path: '**', redirectTo: '/demo', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
