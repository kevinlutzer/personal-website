import { Component, OnInit } from '@angular/core';
import { TelemetryService, TelemetryEvent } from '../room-environment-monitor';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface tableDataInterface {
    id: string;
    cpuTemp: number;
    roomTemp: number;
    co2: number;
    timestamp: string;
}


@Component({
    styleUrls: ['./device-telemetry-table.component.scss'],
    selector: 'device-telemetry-table',
    templateUrl: './device-telemetry-table.component.html',
})  
export class DeviceTelemetryTable implements OnInit {
    displayedColumns = ['id', 'cpuTemp', 'roomTemp', 'co2', 'timestamp'];
    dataSource: Observable<tableDataInterface[]>;

    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];

    constructor(private telemetryService: TelemetryService) {}

    get length$(): Observable<number> {
        return this.telemetryService.total$;
    }

    get loading$(): Observable<boolean> {
        return this.telemetryService.loading$
    }

    ngOnInit(): void { 
        this.telemetryService.list(0, 10);

        this.dataSource = this.telemetryService
            .events$
            .pipe(
                map(tes => tes.map(te => ({
                        id: te.deviceId,
                        cpuTemp: te.cpuTemp,
                        roomTemp: te.roomTemp,
                        co2: te.co2,
                        timestamp: te.timestamp.toLocaleString()
                    })
                )),
                startWith([{}, {}, {}, {}, {}, {}, {}, {}, {}] as tableDataInterface[])
            );
    }

    loadMore($event: any): void {
        this.telemetryService.list(($event.pageIndex || 0) * 10, $event.pageSize);
    }
}
