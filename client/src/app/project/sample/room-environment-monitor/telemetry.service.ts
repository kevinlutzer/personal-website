import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { take, map, filter, startWith } from 'rxjs/operators';
import { ListTelemetryApiResponse, TelemeteryApiInterface, TelemetryEvent } from './telemetry.interface';

@Injectable()
export class TelemetryService {
    constructor(
        private http: HttpClient,
        @Inject('IOT-DEVICE-GCF-HOST') private host: string
    ) {
        this.events$
            .subscribe(events => this.updateIdMap(events))
    }

    private currResp$$: BehaviorSubject<ListTelemetryApiResponse> = new BehaviorSubject(null);
    private idMap$$: BehaviorSubject<Map<string, string>> = new BehaviorSubject(new Map());
    private loading$$: BehaviorSubject<boolean> = new BehaviorSubject(true);
        
    get events$(): Observable<TelemetryEvent[]> {
        return this.currResp$$.pipe(
            filter(Boolean),
            map((resp: ListTelemetryApiResponse) => (resp.telemetry || [])),
            map((tes: TelemeteryApiInterface[]) => tes.map(TelemetryEvent.fromApi))
        );
    }

    get total$(): Observable<number> {
        return this.idMap$$.pipe(
            filter(m => m.size > 0),
            map(m => m.size + 1),
            startWith(11),
        )
    }


    get loading$(): Observable<boolean> {
        return this.loading$$.asObservable();
    }

    list(cursor: number, pageSize: number): void {
        const params = {
            'page_size': pageSize.toString(10),
            'cursor': cursor.toString(10)
        };
        
        this.loading$$.next(true);
        
        this.http.get(`https://${this.host}/RoomEnvironmentMonitor/api/telemetry-event/list`, {
            params: params
        }).pipe(
            take(1),
            filter(Boolean),
        ).subscribe((res: ListTelemetryApiResponse) => {
            this.currResp$$.next(res)
            this.loading$$.next(false);
        });
    }

    updateIdMap(events: TelemetryEvent[]): void {
        const m = this.idMap$$.getValue() || new Map<string, string>();
        (events || []).forEach(event => m.set(event.id, event.id))
        this.idMap$$.next(m);
    }
}
