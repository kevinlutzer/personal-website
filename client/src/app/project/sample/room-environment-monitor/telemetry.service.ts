import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';
import { ListTelemetryApiResponse, TelemeteryApiInterface, TelemetryEvent } from './telemetry.interface';

@Injectable()
export class TelemetryService {
    constructor(
        private http: HttpClient,
        @Inject('IOT-DEVICE-GCF-HOST') private host: string
    ) {}

    currResp$$: BehaviorSubject<ListTelemetryApiResponse> = new BehaviorSubject(null);

    get events$(): Observable<TelemetryEvent[]> {
        return this.currResp$$.pipe(
            filter(Boolean),
            map((resp: ListTelemetryApiResponse) => (resp.telemetry || [])),
            map((tes: TelemeteryApiInterface[]) => tes.map(TelemetryEvent.fromApi))
        );
    }

    list(): void {
        this.http.get(`https://${this.host}/RoomEnvironmentMonitor/api/telemetry-event/list`).pipe(
            filter(Boolean),
            take(1),
        ).subscribe(this.currResp$$);
    }
}
