import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { ServiceWorkerModule } from '@angular/service-worker';

import { CoreModule as ProjectCoreModule } from './core';
import { SharedModule as ProjectSharedModule } from './shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ProjectCoreModule,
    ProjectSharedModule,
    // ServiceWorkerModule
    // ServiceWorkerModule.register('/ngsw-worker.js', {
    //   enabled: environment.production
    // })
  ],
  providers: [
    {provide: 'GOOGLE_STORAGE_DOMAIN', useValue: 'https://storage.googleapis.com/personal-website-klutzer'},
    {provide: 'CLOUD_FUNCTIONS_DOMAIN', useValue: 'https://us-central1-personal-website-klutzer.cloudfunctions.net'}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
