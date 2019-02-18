import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    {
        provide: 'ROOM_ENVIRONMENT_MONITOR_HANDLER',
        useValue: 'https://us-central1-iot-klutzer.cloudfunctions.net/RoomEnvironmentTelemetryHandler/'
    },
  ],
})
export class DemoModule { }
