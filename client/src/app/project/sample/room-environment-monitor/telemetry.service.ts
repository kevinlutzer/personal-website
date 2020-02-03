import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, combineLatest } from 'rxjs';
import { Telemetry, GetTelemetryApiResponse, TelemeteryApiInterface } from './telemetry.interface';
import { map, shareReplay } from 'rxjs/operators';

@Injectable()
export class TelemetryService {
    constructor(
        private http: HttpClient,
        @Inject('IOT-DEVICE-GCF-HOST') private host: string
    ) {}

    get(deviceId: string): Observable<Telemetry> {
        return this.http.get(`https://${this.host}/RoomEnvironmentMonitor/api/telemetry/get`, {params: {deviceId: deviceId}}).pipe(
            map((resp: GetTelemetryApiResponse) => (resp || {telemetry: null}).telemetry),
            map(Telemetry.fromApi)
        )
    }

    getMulti(deviceIds: string[]): Observable<Map<string,Telemetry>> {
        const getRes = (deviceIds || []).map(id => this.get(id))
        return combineLatest(getRes).pipe(
            map((di: Telemetry[]) => {
                const m = new Map<string, Telemetry>();
                (di || []).forEach((di: Telemetry) => m.set(di.deviceId, di));
                return m;
            }),
            shareReplay(1)
        );
    }
}
