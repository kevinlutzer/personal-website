import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';

import { CoreModule as ProjectCoreModule } from './core';
import { SharedModule as ProjectSharedModule } from './shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ProjectCoreModule,
    ProjectSharedModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    {provide: 'GOOGLE_STORAGE_IMAGE_DOMAIN', useValue: 'https://storage.googleapis.com/website-klutzer-images'},
    {provide: 'GOOGLE_STORAGE_DOCS_DOMAIN', useValue: 'https://storage.googleapis.com/website-klutzer-docs'}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
