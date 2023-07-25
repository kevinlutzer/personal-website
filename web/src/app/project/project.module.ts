import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectListComponent } from './list/project-list.component';
import { ProjectService } from './shared/project.service';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { SharedModule as ProjectSharedModule } from '../shared';
import { CoreModule as ProjectCoreModule } from '../core';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailsComponent,
  ],
  imports: [
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    ProjectSharedModule,
    ProjectCoreModule,
    FlexLayoutModule
  ],
  exports: [
    ProjectDetailsComponent
  ],
  providers: [
    ProjectService,
  ],
})
export class ProjectModule { }
