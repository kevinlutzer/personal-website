import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';

export const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AboutRoutingModule {}