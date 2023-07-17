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
            .subscribe((events: TelemetryEvent[]) => this.updateIdMap(events))
    }

    private currResp$$ = new BehaviorSubject<ListTelemetryApiResponse>({} as ListTelemetryApiResponse);
    private idMap$$ = new BehaviorSubject<Map<string, string>>(new Map());
    private loading$$ = new BehaviorSubject<boolean>(true);
        
    get events$(): Observable<TelemetryEvent[] | any[]> {
        return this.currResp$$.pipe(
            filter(Boolean),
            map((resp: ListTelemetryApiResponse) => (resp.telemetry || [])),
            map((tes: TelemeteryApiInterface[]) => tes.map(te => TelemetryEvent.fromApi(<any>te)))
        );
    }

    get total$(): Observable<number> {
        return this.idMap$$.pipe(
            filter((m: Map<string, string>) => m.size > 0),
            map((m: Map<string, string>) => m.size + 1),
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
            filter((v: any) => !!v),
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
