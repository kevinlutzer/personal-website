import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview.component';

export const routes: Routes = [
  {path: '', component: OverviewComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class OverviewRoutingModule {}
