import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule as ProjectCoreModule } from './core';
import { SharedModule as ProjectSharedModule } from './shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';  
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';

import { OverviewModule } from './overview/overview.module';
import { ProjectModule } from './project';
import { BlogComponent } from './blog/blog/blog.component';
import { BlogModule } from './blog/blog.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    BlogComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ProjectCoreModule,
    ProjectSharedModule,
    BlogModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    ProjectModule,
    OverviewModule, 
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
