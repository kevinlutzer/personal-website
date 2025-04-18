import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project';
import { OverviewComponent } from './overview';
import { BlogComponent, BlogListComponent } from './blog';

export const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'projects', component: ProjectListComponent},
  // { path: 'blogs', component: BlogListComponent},
  // { path: 'blogs/:blog_id', component: BlogComponent},
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: '**', redirectTo: '/overview', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
