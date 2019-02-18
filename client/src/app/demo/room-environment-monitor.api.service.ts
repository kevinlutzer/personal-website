import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { switchMap } from 'rxjs/operators';
import {
    RoomEnvironmentMonitorTelemetryApiInterface,
    RoomEnvironmentMonitorTelemetryApiListRequestInterface,
    RoomEnvironmentMonitorTelemetryApiListResponseInterface
} from './room-environment-monitor-telemetry.api.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class RoomEnvironmentMonitorTelemetryApiService {
    constructor(
        private httpClient: HttpClient,
        @Inject('ROOM_ENVIRONMENT_MONITOR_HANDLER') private handlerUrl: string
    ) {}

    listRoomEnvironmentMonitorTelemetry(r: RoomEnvironmentMonitorTelemetryApiListRequestInterface):
    Observable<RoomEnvironmentMonitorTelemetryApiListResponseInterface> {
        const params = new HttpParams();
        params.set('cursor', r.cursor.toString());
        params.set('pageSize', r.pageSize.toString());
        params.set('deviceId', r.deviceId);
        return this.httpClient.get<RoomEnvironmentMonitorTelemetryApiListResponseInterface>(this.handlerUrl, {params: params});
    }
}
