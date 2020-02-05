import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListTelemetryApiResponse, TelemeteryApiInterface, TelemetryEvent } from './telemetry.interface';

@Injectable()
export class TelemetryService {
    constructor(
        private http: HttpClient,
        @Inject('IOT-DEVICE-GCF-HOST') private host: string
    ) {}

    list(): Observable<TelemetryEvent[]> {
        return this.http.get(`https://${this.host}/RoomEnvironmentMonitor/api/telemetry-event/list`).pipe(
            map((resp: ListTelemetryApiResponse) => resp.telemetry || []),
            map((data: TelemeteryApiInterface[]) => data.map(TelemetryEvent.fromApi))
        )
    }
}
