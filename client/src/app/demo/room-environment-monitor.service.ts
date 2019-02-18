import { Injectable, Inject } from '@angular/core';
import { Observable, Subject, BehaviorSubject, of, combineLatest } from 'rxjs';

import {
    RoomEnvironmentMonitorTelemetryApiInterface,
    RoomEnvironmentMonitorTelemetryApiListRequestInterface,
    RoomEnvironmentMonitorTelemetryApiListResponseInterface
} from './room-environment-monitor-telemetry.api.interface';

import { RoomEnvironmentMonitorTelemetryApiService } from './room-environment-monitor.api.service';
import { RoomEnvironmentMonitorTelemetry } from './room-environment-monitor-telemetry.model';
import { filter, tap, map, switchMap } from 'rxjs/operators';
import { currentId } from 'async_hooks';

const DEVICE_ID = 'room-environment-monitor-personal';

@Injectable()
export class RoomEnvironmentMonitorTelemetryService {

    private _hasMore = new BehaviorSubject(true);
    private _nextCursor: BehaviorSubject<number> = new BehaviorSubject(0);
    private _currentCursor: BehaviorSubject<number> = new BehaviorSubject(0);
    private _currentPageSize: BehaviorSubject<number> = new BehaviorSubject(0);
    private _roomEnvironmentMonitorTelemetry$$: BehaviorSubject<RoomEnvironmentMonitorTelemetry[]> = new BehaviorSubject([]);

    constructor(
        private apiService: RoomEnvironmentMonitorTelemetryApiService,
    ) {
        combineLatest(this._currentCursor, this._currentPageSize)
        .pipe(
            switchMap(([c, p]) => this._listMore(DEVICE_ID,  c, p))
        )
        .subscribe(this._roomEnvironmentMonitorTelemetry$$);
    }

    public get roomEnvironmentMonitorTelemetry$(): Observable<RoomEnvironmentMonitorTelemetry[]> {
        return this._roomEnvironmentMonitorTelemetry$$.asObservable();
    }

    public get hasMore(): Observable<boolean> {
        return this._hasMore.asObservable();
    }

    public get nextCursor(): Observable<number> {
        return this._nextCursor.asObservable();
    }

    public set cursor(cursor: number) {
        this._currentCursor.next(cursor);
    }

    public set pageSize(pageSize: number) {
        this._currentPageSize.next(pageSize);
    }

    private _listMore(deviceId: string, cursor: number, pageSize: number): Observable<RoomEnvironmentMonitorTelemetry[]> {
        if (this._hasMore.value) {
            return this.roomEnvironmentMonitorTelemetry$;
        }

        const req = {
            deviceId: deviceId,
            cursor: cursor,
            pageSize: pageSize
        } as RoomEnvironmentMonitorTelemetryApiListRequestInterface;
        return this.apiService
            .listRoomEnvironmentMonitorTelemetry(req)
            .pipe(
                filter(Boolean),
                tap(res => this._hasMore.next(res.hasMore)),
                map(res => res.data.map(RoomEnvironmentMonitorTelemetry.fromApi)),
            );
    }
}
